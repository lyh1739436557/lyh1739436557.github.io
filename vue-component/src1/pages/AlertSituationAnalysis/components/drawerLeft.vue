<template>
  <div class="l-drawer-left">
    <drawer-left>
      <template slot="title">
        <el-tabs v-model="activeName" class="drawer-left-tab-pane">
          <el-tab-pane label="实时警情" name="1"></el-tab-pane>
          <el-tab-pane label="警情分析" name="2"></el-tab-pane>
        </el-tabs>
      </template>
      <div class="l-drawer-left-body flex-row">
        <div class="l-drawer-left-body-item flex-1 real-time-alert" :class="activeName === '1' ? 'enter' : 'leave'" v-if="activeName === '1'" key="1">
          <!-- 实时警情 -->
          <drawer-left-table-1></drawer-left-table-1>
        </div>
        <div class="l-drawer-left-body-item flex-1 alert-analysis" :class="activeName === '2' ? 'enter' : 'leave'" v-if="activeName === '2'" key="2">
          <!-- 警情分析 -->
          <drawer-left-table-2></drawer-left-table-2>
        </div>
      </div>
      <div slot="footer" v-if="activeName === '2'"></div>
    </drawer-left>
  </div>
</template>

<script>
import { drawerLeft } from '@/components'
import drawerLeftTable1 from './drawerLeftTable1'
import drawerLeftTable2 from './drawerLeftTable2'
export default {
  name: 'lDrawerLeft',
  components: {
    drawerLeft, drawerLeftTable1, drawerLeftTable2
  },
  data () {
    return {
      activeName: '1'
    }
  }
}
</script>

<style lang="scss">
.l-drawer-left {
  .drawer-left-tab-pane {
    height: 48px;
    line-height: 48px;
    .el-tabs__nav {
      margin-left: 20px;
      .el-tabs__item {
        font-size: 18px;
        position: relative;
        & + .el-tabs__item {
          &:after {
            content: '';
            width: 1px;
            height: 15px;
            background-color: #C3C9D4;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 3px;
            margin: auto;
          }
        }
      }
    }
  }
  &-body {
    height: 100%;
    &-item {
      transition: all .3s;
    }
    .enter {
      width: 100%;
    }
    .leave {
      width: 0;
    }
  }
}
</style>
