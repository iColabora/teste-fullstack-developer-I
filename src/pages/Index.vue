<template>
  <q-page>
    <div class="q-pa-md">
      <q-table class="table" :columns="columns" :data="data" row-key="TAREFA" :rows-per-page-options="[10]">
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th
              v-for= 'col in props.cols'
              :key='col.name'
              class="text-white"
              style="background-color: #102938;"
            >
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props" class="curso">
            <template v-for="col in props.cols">
              <template v-if="props.row.STT !== 'total'">
                <q-td :props="props" :class='`cursor-pointer ${col.bgColor}`' @click="onRowClick(props.row.DRILLDOWN)" :key="col.name">
                  {{col.value}}
                </q-td>
              </template>
              <template v-else>
                <q-td :props="props" style="background-color: #424242; color: white;"  :key="col.name">
                  {{col.value}}
                </q-td>
              </template>
            </template>
          </q-tr>
        </template>
      </q-table>
    </div>
    <div>
      <q-dialog
        v-model="haveDrill"
        v-if="this.haveDrill"
      >
        <q-card style="width: 1450px; max-width: 90vw;">
          <q-card-section>
            <div class="text-h6"></div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <TableDrillDown
              :listDrilldown="contentDrillDown"
            />
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import rows from '../API/file'
import TableDrillDown from 'src/components/TableDrillDown.vue'
export default {
  components: {
    TableDrillDown
  },
  data () {
    return {
      columns: [{
        name: 'TAREFA',
        label: 'Tarefa',
        align: 'left',
        field: row => row.TAREFA,
        bgColor: 'bg-task'
      },
      {
        name: 'VENCIDO',
        label: 'Vencido',
        align: 'center',
        field: row => row.VENCIDO,
        bgColor: 'bg-expired'
      },
      {
        name: 'D0',
        label: 'D0',
        align: 'center',
        field: row => row.D0,
        bgColor: 'bg-D0'
      },
      {
        name: 'D1',
        label: 'D1',
        align: 'center',
        field: row => row.D1,
        bgColor: 'bg-D1'
      },
      {
        name: 'D2',
        label: 'D2',
        align: 'center',
        field: row => row.D2,
        bgColor: 'bg-D2'
      },
      {
        name: 'D3',
        label: 'D3',
        align: 'center',
        field: row => row.D3,
        bgColor: 'bg-D3'
      },
      {
        name: 'TOTAL',
        label: 'Total',
        align: 'center',
        field: row => row.TOTAL,
        bgColor: 'bg-total'
      }
      ],
      data: rows,
      haveDrill: false,
      contentDrillDown: [],
      hover: false
    }
  },
  methods: {
    onRowClick (drillDown) {
      this.contentDrillDown = []
      drillDown.length ? this.haveDrill = true : this.haveDrill = false
      this.contentDrillDown = drillDown
    }
  }
}
</script>

<style>
.cursor-pointer:first-child {
  background: linear-gradient(to right, #3fc3a2 50%, #fff 50%) right;
  background-size: 200% 100%;
  transition:all .6s linear;
}
.cursor-pointer:first-child:hover {
background-position: left;
}
</style>
