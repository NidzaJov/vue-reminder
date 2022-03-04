<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}

</script>

<style lang="less" scoped>
@import "./styles/variables.less";

#app {
  width: 600px;
  border: 4px solid @border-color;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

}

</style>

<style lang="less" src="./styles/All.less">

</style>
