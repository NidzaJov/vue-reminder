<template>
  <div>
      <label for="">Enter some text:</label>
      <input type="text" v-model="ordinarySentence">
      <input type="text" v-bind:value="quotedSentence">
      <ClearButton @button-clicked="removeSentence"></ClearButton>

      <SimpleParagraph :my-sentence="ordinarySentence"></SimpleParagraph>

  </div>
</template>

<script>
import SimpleParagraph from './SimpleParagraph.vue'
import ClearButton from './ClearButton.vue'

export default {
  name: 'ReactiveInput',
  data () {
    return {
      ordinarySentence: 'Can I render this text?'
    }
  },
  methods: {
    removeSentence (eventData) {
      this.ordinarySentence = ''
      console.log('Total clicks: ', eventData)
    }
  },
  computed: {
    quotedSentence () {
      return `"${this.ordinarySentence}"`
    }
  },
  components: {
    SimpleParagraph,
    ClearButton
  }
}
</script>

<style lang="less">

</style>
