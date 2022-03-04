<template>
  <div class="single-task" @click="toggleDone" v-if="task">
      <input type="checkbox" v-model="task.done">
      <span
        class="text"
        :class="spanClass"
        v-if="!editMode">
           {{task.text}}
      </span>
      <input
        type="text"
        class="text"
        v-model="editedText"
        v-if="editMode"
        @keyup.enter="saveEdit"
        @click.stop>
      <my-button
        :stop=true
        v-show="!editMode"
        @click="startEdit">Edit</my-button>
      <my-button
        :stop=true
        v-show='editMode'
        @click="cancelEdit">Cancel</my-button>
      <my-button
        @click="handleDelete"
        :stop="true"
      >X</my-button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import MyButton from './MyButton.vue'

export default {
  name: 'SingleTask',
  components: { MyButton },
  data () {
    return {
      editedText: ''
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapActions('todos', ['deleteTask', 'editTask']),
    toggleDone () {
      this.task.done = !this.task.done
      this.editTask({
        id: this.task.id,
        text: this.task.text,
        done: this.task.done
      })
    },
    handleDelete () {
      this.deleteTask(this.task.id)
    },
    startEdit () {
      this.editedText = this.task.text
      console.log(this.editedText)
      this.$router.push({ name: 'EditTask', params: { id: this.task.id } })
    },
    saveEdit () {
      this.editTask({
        id: this.task.id,
        text: this.editedText,
        done: this.task.done
      })
      this.$router.push({ name: 'TaskList' })
    },
    cancelEdit () {
      this.$router.push({ name: 'TaskList' })
    }
  },
  computed: {
    ...mapState('todos', ['todoData']),
    spanClass () {
      return {
        'is-checked': this.task.done
      }
    },
    task () {
      if (this.todoData) {
        const foundTodo = this.todoData.find(t => t.id === this.id)
        return foundTodo
      }
      return false
    },
    editMode () {
      if (this.$route.name === 'EditTask') {
        return true
      } return false
    }
  },

  created () {
    this.editedText = this.task.text
  }
}

</script>

<style lang="less" scoped>
@import "../styles/variables.less";
.single-task {
    width: @default-width;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
        background-color: #DDDDDD;
    }
      .checkbox {
          margin-right: @padding-l
      }
    .text {
        flex-grow: 1;
    }
    .is-checked {
        text-decoration: line-through;
    }
}
</style>
