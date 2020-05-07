<template>
  <div class="l-system-sidebar">
    <el-menu :default-active="defaultActive" background-color="transparent" active-background-color="#DFE4E8" router>
      <el-submenu index="/system/userManagement">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item v-for="(item, key) in hpPoliceName" :key="key" :index="'/system/userManagement/' + key">{{ item }}</el-menu-item>
      </el-submenu>
      <el-menu-item index="/system/authorityManagement">
        <i class="el-icon-s-tools"></i>
        <span slot="title">权限管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { hpPoliceName } from '@/assets/js/fieldMap'
export default {
  name: 'lSystemSidebar',
  data () {
    return {
      defaultActive: this.$route.path,
      hpPoliceName: hpPoliceName
    }
  }
}
</script>

<style lang="scss">
.l-system-sidebar {
  width: 220px;
  .el-menu {
    border-right: none;
    .el-menu-item {
      height: 48px;
      line-height: 48px;
      border-left: 3px solid transparent;
      &.is-active {
        border-left: 3px solid #3E82F6;
      }
    }
    .el-submenu {
      border-left: 3px solid transparent;
      .el-submenu__title {
        height: 48px;
        line-height: 48px;
      }
      .el-menu-item {
        height: 40px;
        line-height: 40px;
        border-left: 3px solid transparent;
        position: relative;
        &::before {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          content: '';
          background-color: #C2CBD5;
          position: absolute;
          left: 30px;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        &.is-active {
          border-left: 3px solid #3E82F6;
          &::before {
            background-color: #3E82F6;
          }
        }
      }
    }
  }
}
</style>
