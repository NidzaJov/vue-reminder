<template>
  <div class="class-list">
      <SingleTask
        v-for="todo in filteredTodos"
        :key="todo.id"
        :task="todo"
      />
  </div>
</template>

<script>
import SingleTask from './SingleTask.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'TaskList',
  components: { SingleTask },
  computed: {
    ...mapGetters('todos', ['filteredTodos'])
  }
}
</script>

<style>

</style>
