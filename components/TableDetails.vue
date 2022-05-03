<template>
  <div class="container task-content-detail text-center">
    <span v-if="Object.keys(taskDetails).length === 0" class="loading-error">
      Parece que não há nenhuma instância para a tarefa selecionada :)
    </span>
    <table v-else class="table-task">
      <thead>
        <tr>
          <th>Instância</th>
          <th>Protocolo</th>
          <th>Regua</th>
          <th>Início</th>
          <th>SLA</th>
          <th>Operador</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(taskDetail, taskDetailKey) in taskDetails" :key="taskDetailKey">
          <td>{{ taskDetail.INSTANCIA }}</td>
          <td>{{ taskDetail.PROTOCOLO }}</td>
          <td>{{ taskDetail.REGUA }}</td>
          <td>{{ taskDetail.inicio }}</td>
          <td>{{ taskDetail.SLA }}</td>
          <td>{{ taskDetail.operador }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['taskDetails']
}
</script>
