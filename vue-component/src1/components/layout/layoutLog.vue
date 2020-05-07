<template>
  <div class="layout-log flex-col">
    <div class="log-menu flex-row flex-shrink">
      <home-menu></home-menu>
      <home-user></home-user>
    </div>
    <div class="log-view flex-1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { homeMenu, homeUser } from '../index'
export default {
  name: 'layoutLog',
  components: {
    homeMenu, homeUser
  }
}
</script>

<style lang="scss">
.layout-log {
  width: 100%;
  height: 100%;
  background-color: #EBEEF0;
  position: relative;
  .log-menu {
    padding: 16px;
    justify-content: space-between;
  }
  .log-view {
    padding: 0 16px 16px;
  }
}
</style>
