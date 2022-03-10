<script>
import TaskDetail from './TaskDetail.vue';
import axios from 'axios';

export default {
  components: { TaskDetail },
  data() {
    return {
      tasks: [],
      showDetail: false,
      cellInfo: {
        taskName: '',
        taskScale: '',
        taskOperations: [],
      },
    };
  },
  methods: {
    async getTasks() {
      const res = await axios.get('/tasks');
      this.tasks = res.data.tasks;
    },
    openDetail(cell, task) {
      if (task.STT === 'processo') {
        this.showDetail = true;
        this.cellInfo.taskName = task.TAREFA;
        this.cellInfo.taskScale = cell;
        this.cellInfo.taskOperations = task.DRILLDOWN.filter(
          (el) => el.REGUA === cell
        );
      }
    },
    closeDetail() {
      this.showDetail = false;
      this.cellInfo = {
        taskName: '',
        taskOperations: [],
      };
    },
  },
  mounted() {
    this.getTasks();
  },
};
</script>

<template>
  <div>
    <table>
      <tr>
        <th>Tarefa</th>
        <th>Vencido</th>
        <th>D0</th>
        <th>D1</th>
        <th>D2</th>
        <th>D3</th>
        <th>Total</th>
      </tr>
      <tr v-for="task in tasks">
        <td :class="[task.STT, 'task']">{{ task.TAREFA }}</td>
        <td :class="[task.STT, 'vencido']" @click="openDetail('VENCIDO', task)">
          {{ task.VENCIDO }}
        </td>
        <td :class="[task.STT, 'd0']" @click="openDetail('D0', task)">
          {{ task.D0 }}
        </td>
        <td :class="[task.STT, 'd1']" @click="openDetail('D1', task)">
          {{ task.D1 }}
        </td>
        <td :class="[task.STT, 'd2']" @click="openDetail('D2', task)">
          {{ task.D2 }}
        </td>
        <td :class="[task.STT, 'd3']" @click="openDetail('D3', task)">
          {{ task.D3 }}
        </td>
        <td :class="[task.STT, 'total']">{{ task.TOTAL }}</td>
      </tr>
    </table>

    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <TaskDetail
        :show="showDetail"
        :taskInfo="cellInfo"
        @close="closeDetail()"
      />
    </Teleport>
  </div>
</template>

<style lang="scss">
body {
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  font-size: 0.8rem;
  color: #424242;
}

table {
  border-collapse: collapse;
  width: 60%;
}

td,
th {
  padding: 1rem;
  text-align: center;
}

th {
  background-color: #102938;
  border-color: #102938;
  color: #fff;
}

tr {
  border-bottom: 1px solid #3fc3a2;
  &:last-child td {
    background-color: #424242;
    border-color: #424242;
    color: #fff;
  }
}

.processo {
  cursor: pointer;
  &.task {
    cursor: default;
    background: linear-gradient(to right, #3fc3a2 50%, #fff 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.3s ease-out;
    &:hover {
      background-position: bottom left;
    }
  }
  &.vencido {
    background-color: #b2ebf2;
  }
  &.d0 {
    background-color: #f96585;
  }
  &.d1 {
    background-color: #f98585;
  }
  &.d2 {
    background-color: #f9a385;
  }
  &.d3 {
    background-color: #f9be85;
  }
  &.total {
    cursor: default;
    background-color: #b2ebf2;
  }
  opacity: 1;
  &:not(.task):hover {
    opacity: 0.8;
  }
}

.task {
  text-align: left;
}
</style>
