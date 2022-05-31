<template>
  <q-page>
    <div class="row">
      <q-table
      title="Relatório"
      :rows="histograma"
      :columns="columns"
      row-key="tarefa"
      class="col"
    ></q-table>
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
      histograma: []
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
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
