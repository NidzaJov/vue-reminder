<template>
  <div class="class-list">
      <SingleTask
        v-for="todo in todoData"
        :key="todo.id"
        :id="todo.id"
      />
      <my-button @click="openNewTodo">Add new todo</my-button>
  </div>
</template>

<script>
import SingleTask from './SingleTask.vue'
// import { mapGetters } from 'vuex'
import { mapState } from 'vuex'
import MyButton from './MyButton.vue'

export default {
  name: 'TaskList',
  components: { SingleTask, MyButton },
  computed: {
  //  ...mapGetters('todos', ['filteredTodos'])
    ...mapState('todos', ['todoData'])
  },
  methods: {
    openNewTodo () {
      this.$router.push({ name: 'TaskAdd' })
    }
  }
}
</script>

<style>

</style>
