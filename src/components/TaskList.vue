<template>
  <div class="class-list">
      <SingleTask
        v-for="todo in todoData"
        :key="todo.id"
        :task="todo"
      />
  </div>
</template>

<script>
import SingleTask from './SingleTask.vue'
// import { mapGetters } from 'vuex'
import { mapState } from 'vuex'

export default {
  name: 'TaskList',
  components: { SingleTask },
  computed: {
  //  ...mapGetters('todos', ['filteredTodos'])
    ...mapState('todos', ['todoData'])
  }
}
</script>

<style>

</style>
