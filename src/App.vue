<template>
  <div id="app">
    <h2>Kanban Board</h2>
    <new-task></new-task>
  </div>
</template>

<script>

import NewTask from './components/NewTask.vue'

export default {
  name: 'App',
  components: {
    NewTask
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
