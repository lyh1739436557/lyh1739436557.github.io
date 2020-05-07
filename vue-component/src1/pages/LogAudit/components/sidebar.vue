<template>
  <div class="l-log-sidebar">
    <el-menu :default-active="defaultActive" background-color="transparent" router>
      <el-menu-item index="/logAudit/alarmTransfer">
        <i class="el-icon-position"></i>
        <span slot="title">警情传输日志</span>
      </el-menu-item>
      <el-menu-item index="/logAudit/Operating">
        <i class="el-icon-document"></i>
        <span slot="title">操作日志</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'lLogSidebar',
  data () {
    return {
      defaultActive: this.$route.path
    }
  }
}
</script>

<style lang="scss">
.l-log-sidebar {
  width: 220px;
  .el-menu-item {
    height: 48px;
    border-left: 3px solid transparent;
    &.is-active {
      border-left: 3px solid #3E82F6;
    }
  }
}
</style>
