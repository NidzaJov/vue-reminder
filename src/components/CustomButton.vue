<template>
  <button class="custom-button" @click="handleClick">
      <span class="button-text">
          Klikni me: {{doubleCount}}
      </span>
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    myCount: {
      type: Number
    }
  },
  methods: {
    handleClick () {
      this.$emit('click', { amount: 1 })
    }
  },
  computed: {
    doubleCount () {
      return this.myCount * 10
    }
  }
}
</script>

<style lang="less" scoped>
@button-color: #333333;
@text-color: #EEEEEE;

.custom-button {
    background-color: @button-color;
    .button-text {
        color: @text-color
    }
}

</style>
