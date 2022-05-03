<template>
  <div class="container task-content text-center">
    <span v-if="$fetchState.pending" class="loading-error">
      Carregando tarefas, aguarde :)
    </span>
    <span v-else-if="$fetchState.error" class="loading-error">
      Ops, não foi possível carregar as tarefas! :´(
    </span>
    <table v-else class="table-task">
      <thead class="text-center">
        <tr>
          <th class="text-left">Tarefas</th>
          <th>Vencidos</th>
          <th>D0</th>
          <th>D1</th>
          <th>D2</th>
          <th>D3</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="(task, taskKey) in taskData" :key="taskKey">
          <td class="text-left">{{ task.TAREFA }}</td>
          <td class="task-vencida" @click="openTaskDetails(task, 'VENCIDO')">{{ task.VENCIDO }}</td>
          <td class="task-d-0" @click="openTaskDetails(task, 'D0')">{{ task.D0 }}</td>
          <td class="task-d-1" @click="openTaskDetails(task, 'D1')">{{ task.D1 }}</td>
          <td class="task-d-2" @click="openTaskDetails(task, 'D2')">{{ task.D2 }}</td>
          <td class="task-d-3" @click="openTaskDetails(task, 'D3')">{{ task.D3 }}</td>
          <td class="task-total">{{ task.TOTAL }}</td>
        </tr>
      </tbody>
      <tfoot class="text-center">
        <tr v-if="taskTotal">
          <td class="text-left">{{ taskTotal.TAREFA }}</td>
          <td>{{ taskTotal.VENCIDO }}</td>
          <td>{{ taskTotal.D0 }}</td>
          <td>{{ taskTotal.D1 }}</td>
          <td>{{ taskTotal.D2 }}</td>
          <td>{{ taskTotal.D3 }}</td>
          <td>{{ taskTotal.TOTAL }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskData: [],
      taskTotal: [],
    }
  },
  async fetch() {
    const response = await this.$axios.get('https://ico-fullstack-test.herokuapp.com/v1/histograma');

    this.taskData = response.data.filter(task => {
      return task.STT !== 'total';
    });

    this.taskTotal = response.data.find(task => task.STT === 'total');
  },
  methods: {
    openTaskDetails(task, drill) {
      const taskDetails = task.DRILLDOWN.filter((detail) => {
        return detail.REGUA === drill;
      })

      this.$emit('taskDetails', taskDetails);
      this.$emit('show', true);
    }
  }
}
</script>
