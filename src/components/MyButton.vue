<template>
  <button
  class="todo-button ps"
  @click="emitClick">
      <slot>Submit</slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    stop: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    emitClick ($event) {
      if (this.stop) {
        $event.stopPropagation()
      }
      this.$emit('click')
    }
  }
}
</script>

<style>

</style>
