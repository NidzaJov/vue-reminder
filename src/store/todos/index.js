const APIURL = 'http://localhost:3000'

export default {
  namespaced: true,
  state: {
    searchParams: {
      searchText: '',
      hideCompleted: false
    },
    todoData: null
  },
  actions: {
    async getTasksAPI (context) {
      context.commit('setAllTasks', null)
      let dynamicURL = `${APIURL}/tasks?`
      if (context.state.searchParams.hideCompleted) {
        dynamicURL += `done=${!context.state.searchParams.hideCompleted}`
      }
      if (context.state.searchParams.searchText.trim().length > 0) {
        dynamicURL += `&q=${context.state.searchParams.searchText.trim()}`
      }
      const response = await fetch(dynamicURL)
      if (response.ok) {
        const parsedJSON = await response.json()
        context.commit('setAllTasks', parsedJSON)
      }
    },
    async addTask (context, text) {
      const newTodo = {
        text, done: false
      }
      const response = await fetch(`${APIURL}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      })
      if (response.ok) {
        context.dispatch('getTasksAPI')
      }
    },
    async deleteTask (context, taskId) {
      const response = await fetch(`${APIURL}/tasks/${taskId}`, {
        method: 'DELETE'
      })
      if (response.ok) {
        context.dispatch('getTasksAPI')
      }
    },

    async editTask (context, task) {
      console.log('Edit task ', task)
      const response = await fetch(`${APIURL}/tasks/${task.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      })
      if (response.ok) {
        context.dispatch('getTasksAPI')
      }
    },
    setSearchParams (context, params) {
      context.commit('setParams', params)
      context.dispatch('getTasksAPI')
    }
  },
  mutations: {
    pushTask (state, todoObject) {
      state.todoData.push(todoObject)
    },
    spliceTask (state, idx) {
      state.todoData.splice(idx, 1)
    },
    setParams (state, params) {
      state.searchParams = params
    },
    setAllTasks (state, tasks) {
      state.todoData = tasks
    }
  },
  getters: {
    filteredTodos (state) {
      const searchedTodos = state.todoData
        .filter(todo => {
          const todoTextLowerCase = todo.text.toLowerCase()
          const searchTextLowerCase = state.searchParams.searchText.toLowerCase()
          const hasSearchText = todoTextLowerCase.indexOf(searchTextLowerCase) >= 0

          return hasSearchText
        })

      if (state.searchParams.hideCompleted) {
        const notCompleted = searchedTodos.filter(todo => !todo.done)
        return notCompleted
      } else {
        return searchedTodos
      }
    }
  }
}
