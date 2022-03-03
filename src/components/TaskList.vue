<template>
  <div class="class-list">
      <SingleTask
        v-for="todo in todos"
        :key="todo.id"
        :task="todo"
      />
  </div>
</template>

<script>
import SingleTask from './SingleTask.vue'

export default {
  name: 'TaskList',
  components: { SingleTask },
  props: {
    todos: { type: Array }
  }
}
</script>

<style>

</style>
