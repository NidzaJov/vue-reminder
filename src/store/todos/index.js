let idCounter = 0
const generateId = function () {
  idCounter += 1
  return idCounter
}

export default {
  namespaced: true,
  state: {
    todoData: [
      { id: generateId(), text: 'Buy milk', done: false },
      { id: generateId(), text: 'Buy bread', done: false },
      { id: generateId(), text: 'Walk the dog', done: false },
      { id: generateId(), text: 'Wash the dishes', done: false }
    ],
    searchParams: {
      searchText: '',
      hideCompleted: false
    }
  },
  actions: {
    addTask (context, text) {
      const newTodo = {
        id: generateId(), text, done: false
      }
      context.commit('pushTask', newTodo)
    },
    deleteTask (context, taskId) {
      const taskIdx = context.state.todoData.findIndex(t => t.id === taskId)
      if (taskIdx >= 0) {
        context.commit('spliceTask', taskIdx)
      }
    },
    setSearchParams (context, params) {
      context.commit('setParams', params)
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
