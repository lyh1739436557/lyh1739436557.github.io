<template>
  <div class="layout-home">
    <div class="home-menu">
      <home-menu></home-menu>
    </div>
    <div class="home-user">
      <home-user></home-user>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { homeMenu, homeUser } from '../index'
export default {
  name: 'layoutHome',
  components: {
    homeMenu, homeUser
  }
}
</script>

<style lang="scss">
.layout-home {
  width: 100%;
  height: 100%;
  position: relative;
  .home-menu {
    position: fixed;
    left: 16px;
    top: 16px;
    z-index: 100;
  }
  .home-user {
    position: fixed;
    right: 16px;
    top: 16px;
    z-index: 103;
  }
}
</style>
