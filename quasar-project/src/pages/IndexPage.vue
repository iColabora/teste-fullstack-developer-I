<template>
  <q-page>
    <div class="row">
      <h5>Relatório</h5>
      <div class="col-12">
      <q-table
        :rows="histograma"
        :columns="columns"
        row-key="tarefa"
        table-class="col-12"
      >
        <template #body="props">
          <q-tr
            :props="props"
            :class="(props.row.TAREFA === 'Total')?'total text-white':''"
          >
            <q-td
              key="tarefa"
              :props="props"
            >
              {{ props.row.TAREFA }}
            </q-td>

            <q-td
              key="vencido"
              :props="props"
              @click="mostrar(props.row.TAREFA, 'VENCIDO')"
              :class="(props.row.TAREFA === 'Total')?'total text-white':'padrao'"
            >
              {{ props.row.VENCIDO }}
            </q-td>

            <q-td
              key="d0"
              :props="props"
              @click="mostrar(props.row.TAREFA, 'D0')"
              :class="(props.row.TAREFA === 'Total')?'total text-white':'d0'"
            >
              {{ props.row.D0 }}
            </q-td>

            <q-td
              key="d1"
              :props="props"
              @click="mostrar(props.row.TAREFA, 'D1')"
              :class="(props.row.TAREFA === 'Total')?'total text-white':'d1'"
            >
              {{ props.row.D1 }}
            </q-td>

            <q-td
              key="d2"
              :props="props"
              @click="mostrar(props.row.TAREFA, 'D2')"
              :class="(props.row.TAREFA === 'Total')?'total text-white':'d2'"
            >
              {{ props.row.D2 }}
            </q-td>

            <q-td
              key="d3"
              :props="props"
              @click="mostrar(props.row.TAREFA, 'D3')"
              :class="(props.row.TAREFA === 'Total')?'total text-white':'d3'"
            >
              {{ props.row.D3 }}

            </q-td>

            <q-td
              key="total"
              :props="props"
              @click="mostrar(props.row.TAREFA, 'TOTAL')"
              :class="(props.row.TAREFA === 'Total')?'total text-white':'padrao'"
            >
              {{ props.row.TOTAL }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
      <q-table
        v-if="mostrarDetalhamento"
        :rows="detalhamento"
        :columns="columnsDetalhamento"
        row-key=""
        table-class="col-12"
      >

      </q-table>
      </div>
    </div>
  </q-page>
</template>

<script>
import '../css/style.css'
export default {
  name: 'IndexPage',
  data () {
    return {
      columns: [
        {
          name: 'tarefa',
          required: true,
          label: 'Tarefa',
          align: 'left',
          field: row => row.TAREFA,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'vencido', align: 'center', label: 'Vencido', field: 'VENCIDO', sortable: true, classes: 'padrao' },
        { name: 'd0', align: 'center', label: 'D0', field: 'D0', sortable: true, classes: 'd0' },
        { name: 'd1', align: 'center', label: 'D1', field: 'D1', sortable: true, classes: 'd1' },
        { name: 'd2', align: 'center', label: 'D2', field: 'D2', sortable: true, classes: 'd2' },
        { name: 'd3', align: 'center', label: 'D3', field: 'D3', sortable: true, classes: 'd3' },
        { name: 'total', align: 'center', label: 'Total', field: 'TOTAL', sortable: true, classes: 'padrao' }
      ],
      histograma: [],
      mostrarDetalhamento: false,
      detalhamento: [],
      columnsDetalhamento: [
        {
          name: 'instancia',
          required: true,
          label: 'Instancia',
          align: 'left',
          field: row => row.INSTANCIA,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'protocolo', align: 'center', label: 'Protocolo', field: 'PROTOCOLO', sortable: true },
        { name: 'regua', align: 'center', label: 'Regua', field: 'REGUA', sortable: true },
        { name: 'SLA', align: 'center', label: 'SLA', field: 'SLA', sortable: true },
        { name: 'status', align: 'center', label: 'Status', field: 'STATUS', sortable: true },
        { name: 'tipo_solicitacao', align: 'center', label: 'Tipo solicitação', field: 'TIPO_SOLICITACAO', sortable: true },
        { name: 'inicio', align: 'center', label: 'Início', field: 'inicio', sortable: true },
        { name: 'operador', align: 'center', label: 'Operador', field: 'operador', sortable: true }
      ]
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('https://ico-fullstack-test.herokuapp.com/v1/histograma')
        .then((res) => {
          this.histograma = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    mostrar (linha, coluna) {
      // this.detalhamento = linha
      this.histograma.forEach((registro) => {
        if (registro.TAREFA === linha) {
          if (coluna === 'TOTAL') {
            this.detalhamento = registro.DRILLDOWN
          } else {
            this.detalhamento = registro.DRILLDOWN.filter(function (obj) { return obj.REGUA === coluna })
          }
        }
      })
      this.mostrarDetalhamento = true
      console.log(this.detalhamento)
    }

  }
}
</script>
