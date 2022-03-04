<template>
  <div class="single-task" @click="toggleDone">
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
      >X</my-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MyButton from './MyButton.vue'

export default {
  name: 'SingleTask',
  components: { MyButton },
  data () {
    return {
      editMode: false,
      editedText: ''
    }
  },
  props: {
    task: {
      type: Object
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
      this.editMode = true
      this.editedText = this.task.text
    },
    cancelEdit () {
      this.editMode = false
      this.editedText = ''
    },
    saveEdit () {
      this.editTask({
        id: this.task.id,
        text: this.editedText,
        done: this.task.done
      })
      this.editMode = false
      this.editedText = ''
    }
  },
  computed: {
    spanClass () {
      return {
        'is-checked': this.task.done
      }
    }
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
