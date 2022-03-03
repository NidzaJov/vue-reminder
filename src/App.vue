<template>
  <div id="app">
     <h1 class="title">Vue Reminder App</h1>
     <task-form></task-form>
     <task-list />
  </div>
</template>

<script>

import TaskList from './components/TaskList.vue'
import TaskForm from './components/TaskForm.vue'

export default {
  name: 'App',
  components: {
    TaskList, TaskForm
  }
}

</script>

<style lang="less" scoped>
@import "./styles/variables.less";

#app {
  width: 600px;
  border: 4px solid @border-color;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

   .title {
     text-align: center;
   }
}

</style>

<style lang="less" src="./styles/All.less">

</style>
