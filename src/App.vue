<template>
  <div id="app">
    Hello, Vue!
    <ReactiveInput />
    <custom-button :myCount="count" @click="incrementCount"></custom-button>
    <input type="text" v-model="message">
    <input type="checkbox" v-model="check">
    <input type="text" v-bind:value="message">
  </div>
</template>

<script>

import ReactiveInput from './components/ReactiveInput.vue'
import CustomButton from './components/CustomButton.vue'

export default {
  name: 'App',
  components: {
    ReactiveInput,
    CustomButton
  },
  data () {
    return {
      count: 0,
      message: 'Testing Vue',
      check: false
    }
  },
  methods: {
    incrementCount (eventData) {
      this.count += eventData.amount
    }
  }
}
</script>

<style lang="less">

</style>
