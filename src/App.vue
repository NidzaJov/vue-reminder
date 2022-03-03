<template>
  <div id="app">
     <h1 class="title">Vue Reminder App</h1>
     <task-form @add-todo="addTodoHandler" :search="searchParams"></task-form>
     <task-list :todos="filteredTodos" @delete="deleteTaskHandler"/>
  </div>
</template>

<script>

import TaskList from './components/TaskList.vue'
import TaskForm from './components/TaskForm.vue'

let idCounter = 0
const generateId = function () {
  idCounter += 1
  return idCounter
}

export default {
  name: 'App',
  components: {
    TaskList, TaskForm
  },
  data () {
    return {
      searchParams: {
        searchText: '',
        hideCompleted: false
      },
      todoData: [
        { id: generateId(), text: 'Buy milk', done: false },
        { id: generateId(), text: 'Buy bread', done: false },
        { id: generateId(), text: 'Walk the dog', done: false },
        { id: generateId(), text: 'Wash the dishes', done: false }
      ]
    }
  },
  methods: {
    addTodoHandler (info) {
      const newTodo = {
        id: generateId(), text: info.text, done: false
      }
      this.todoData.push(newTodo)
    },
    deleteTaskHandler (taskId) {
      const taskIdx = this.todoData.findIndex(t => t.id === taskId)
      if (taskIdx >= 0) {
        this.todoData.splice(taskIdx, 1)
      }
    }
  },
  computed: {
    filteredTodos () {
      const searchedTodos = this.todoData
        .filter(todo => {
          const todoTextLowerCase = todo.text.toLowerCase()
          const searchTextLowerCase = this.searchParams.searchText.toLowerCase()
          const hasSearchText = todoTextLowerCase.indexOf(searchTextLowerCase) >= 0

          return hasSearchText
        })

      if (this.searchParams.hideCompleted) {
        const notCompleted = searchedTodos.filter(todo => !todo.done)
        return notCompleted
      } else {
        return searchedTodos
      }
    }
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
