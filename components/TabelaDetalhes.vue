<template>
  <div class="table-details-wrapper">
    <table class="table-details">
      <thead>
        <tr>
          <td>Instância</td>
          <td>Protocolo</td>
          <td>Regua</td>
          <td>Início</td>
          <td>SLA</td>
          <td>Tipo</td>
          <td>Operador</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(instancia, index) in instancias" :key="index" :style="'background-color: ' + ((index % 2) ? '#cce0ff' : '#ffffff')">
          <td>{{ instancia.INSTANCIA }}</td>
          <td>{{ instancia.PROTOCOLO }}</td>
          <td>{{ instancia.REGUA }}</td>
          <td>{{ instancia.inicio }}</td>
          <td>{{ instancia.SLA }}</td>
          <td>{{ instancia.TIPO_SOLICITACAO }}</td>
          <td>{{ instancia.operador }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['instancias']
}
</script>

<style lang="scss" scoped>
  .table-details-wrapper {
    height: 55%;
    width: 70vw;
    font-size: 1rem;
    margin-top: 4em;
    background-color: #f1f1f1;
    border-radius: 10px;
    overflow-y: auto;
  }

  .table-details{
    width: 100%;
    padding: 1em;
    padding-top: 1em;
    border: none;
    border-spacing: 0;
    text-align: center;

    thead {
      td {
        padding-bottom: 1em;
        font-weight: 600;
      }
    }

    tbody {
      td {
        padding-top: 0.5em;
        padding-bottom: 0.5em;
      }
    }
  }
</style>