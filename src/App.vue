<template>
  <div id="app">
    Hello, Vue!
    <ReactiveInput />
  </div>
</template>

<script>

import ReactiveInput from './components/ReactiveInput.vue'

export default {
  name: 'App',
  components: {
    ReactiveInput
  }
}
</script>

<style lang="less">

</style>
