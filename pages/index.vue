<template>
  <div>
      <TaskTable @taskDetails="taskDetails=$event"  @show="show=$event"/>
      <TableDetails v-if="show" :task-details="taskDetails"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskDetails: {},
      show: false
    }
  },
}
</script>
