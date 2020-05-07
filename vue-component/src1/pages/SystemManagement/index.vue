<template>
  <div class="system-management flex-row">
    <div class="sidebar flex-shrink">
      <sidebar></sidebar>
    </div>
    <div class="view flex-1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sidebar from './components/sidebar'
export default {
  name: 'systemManagement',
  components: {
    sidebar
  }
}
</script>

<style lang="scss">
.system-management {
  height: 100%;
  .sidebar {
    padding-right: 16px;
    border-right: 1px solid #CBD1D6;
  }
  .view {
    padding-left: 16px;
  }
}
</style>
