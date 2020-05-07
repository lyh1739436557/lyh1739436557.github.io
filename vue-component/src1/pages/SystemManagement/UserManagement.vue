<template>
  <div class="user-management flex-col">
    <h3 class="user-management-row flex-shrink">{{ policeName }}</h3>
    <div class="user-management-row flex-row justify-between flex-shrink">
      <user-management-search></user-management-search>
      <user-management-tool></user-management-tool>
    </div>
    <div class="user-management-row white-box flex-1">
      <user-management-table></user-management-table>
    </div>
  </div>
</template>

<script>
import { hpPoliceName } from '@/assets/js/fieldMap'
import userManagementSearch from './components/userManagementSearch'
import userManagementTool from './components/userManagementTool'
import userManagementTable from './components/userManagementTable'

export default {
  name: 'userManagement',
  components: {
    userManagementSearch, userManagementTool, userManagementTable
  },
  data () {
    return {
      policeName: hpPoliceName[this.$route.params.policeId] || ''
    }
  },
  watch: {
    $route (newVal) {
      // 更改名称
      this.policeName = hpPoliceName[newVal.params.policeId] || ''
    }
  }
}
</script>

<style lang="scss">
.user-management {
  height: 100%;
  .user-management-row + .user-management-row {
    margin-top: 8px;
  }
}
</style>
