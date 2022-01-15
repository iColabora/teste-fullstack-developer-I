<template>
  <div id="app">
    <DrillDown />
  </div>
</template>

<script>
import './styles/globals.css'
import DrillDown from './components/DrillDown.vue'
export default {
  name: 'App',
  components: {
    DrillDown
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
