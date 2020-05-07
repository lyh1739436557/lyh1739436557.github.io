<template>
  <div class="authority-management flex-col">
    <h3 class="authority-management-row flex-shrink">权限管理</h3>
    <div class="authority-management-row flex-shrink flex-row justify-between">
      <authority-management-search></authority-management-search>
      <authority-management-tool></authority-management-tool>
    </div>
    <div class="authority-management-row flex-1 white-box">
      <authority-management-table></authority-management-table>
    </div>
  </div>
</template>

<script>
import authorityManagementSearch from './components/authorityManagementSearch'
import authorityManagementTool from './components/authorityManagementTool'
import authorityManagementTable from './components/authorityManagementTable'

export default {
  name: 'authorityManagement',
  components: {
    authorityManagementSearch, authorityManagementTool, authorityManagementTable
  }
}
</script>

<style lang="scss">
.authority-management {
  height: 100%;
  .authority-management-row + .authority-management-row {
    margin-top: 8px;
  }
}
</style>
