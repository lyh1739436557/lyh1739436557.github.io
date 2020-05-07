<template>
  <div class="user-management-tool">
    <div class="user-management-tool-row">
      <el-button type="primary" icon="el-icon-plus" @click="handleClickDialog('userManagementToolAdd')">新 增</el-button>
      <el-button type="primary" icon="el-icon-download" @click="handleClickDialog('userManagementToolImport')">批量导入</el-button>
    </div>

    <user-management-tool-add ref="userManagementToolAdd"></user-management-tool-add>
    <user-management-tool-import ref="userManagementToolImport"></user-management-tool-import>
  </div>
</template>

<script>
import userManagementToolAdd from '../dialog/userManagementToolAdd'
import userManagementToolImport from '../dialog/userManagementToolImport'

export default {
  name: 'lUserManagementTool',
  components: {
    userManagementToolAdd,
    userManagementToolImport
  },
  methods: {
    handleClickDialog (ref) {
      if (this.$refs[ref] && this.$refs[ref].handleOpenDialog) {
        this.$refs[ref].handleOpenDialog()
      }
    }
  }
}
</script>
