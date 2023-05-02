<template>
  <div class="q-pa-md">
      <q-table
        class="headertable"
        title="Informações detalhadas"
        :columns="columns"
        :data="listDrilldown"
        row-key="INSTANCIA"
      />
  </div>
</template>

<script>
export default {
  props: {
    listDrilldown: {
      type: Array
    }
  },
  data () {
    return {
      columns: [
        { name: 'INSTANCIA', label: 'Instância', align: 'left', field: 'INSTANCIA' },
        { name: 'STATUS', label: 'Status', align: 'center', field: 'STATUS' },
        { name: 'PROTOCOLO', label: 'Protocolo', align: 'center', field: 'PROTOCOLO' },
        { name: 'REGUA', label: 'Régua', align: 'center', field: 'REGUA' },
        { name: 'inicio', label: 'Início', align: 'center', field: 'inicio' },
        { name: 'SLA', label: 'SLA', align: 'center', field: 'SLA' },
        { name: 'TIPO_SOLICITACAO', label: 'Tipo de solicitação', align: 'center', field: 'TIPO_SOLICITACAO' },
        { name: 'operador', label: 'Operador', align: 'center', field: 'operador' }
      ]
    }
  },
  mounted () {
    console.log('this.listDrilldown', this.listDrilldown)
  }
}
</script>

<style lang="sass">
.headertable

  .q-table__top
    background-color: #102938
    color: white
</style>
