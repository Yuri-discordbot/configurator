<template>
  <div class="home">
    <img alt="Yuri logo" src="../assets/yuri.png">
    <HelloWorld msg="UwU"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
  .home {
    text-align: center;
  }
</style>