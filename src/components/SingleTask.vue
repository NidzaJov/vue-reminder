<template>
  <div class="single-task" @click="toggleDone">
      <input type="checkbox" v-model="task.done">
      <span class="text" :class="spanClass">
           {{task.text}}
      </span>
      <my-button
        class="delete"
        @click="handleDelete"
      >X</my-button>
  </div>
</template>

<script>
import MyButton from './MyButton.vue'

export default {
  name: 'SingleTask',
  components: { MyButton },
  props: {
    task: {
      type: Object
    }
  },
  methods: {
    toggleDone () {
      this.task.done = !this.task.done
    },
    handleDelete () {
      this.$emit('delete', this.task.id)
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
