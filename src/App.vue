<template>
  <DashboardVue></DashboardVue>
</template>

<script>
import DashboardVue from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    DashboardVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
