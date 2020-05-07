<template>
  <div class="layout-system flex-col">
    <div class="system-menu flex-row flex-shrink">
      <home-menu></home-menu>
      <home-user></home-user>
    </div>
    <div class="system-view flex-1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { homeMenu, homeUser } from '../index'
export default {
  name: 'layoutSystem',
  components: {
    homeMenu, homeUser
  }
}
</script>

<style lang="scss">
.layout-system {
  width: 100%;
  height: 100%;
  background-color: #EBEEF0;
  position: relative;
  .system-menu {
    padding: 16px;
    justify-content: space-between;
  }
  .system-view {
    padding: 0 16px 16px;
  }
}
</style>
