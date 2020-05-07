<template>
  <div class="l-drawer-left">
    <drawer-left>
      <div slot="title">发案预测</div>
      <div class="l-drawer-left-body">
        <div class="l-drawer-left-body-item white-box border-radius-4" style="min-height: 200px;">
          <drawer-left-warning-prediction></drawer-left-warning-prediction>
        </div>
        <div class="l-drawer-left-body-item white-box border-radius-4" style="min-height: 245px;">
          <drawer-left-future-hour24></drawer-left-future-hour24>
        </div>
        <div class="l-drawer-left-body-item white-box border-radius-4" style="min-height: 245px;">
          <drawer-left-year-and-prediction></drawer-left-year-and-prediction>
        </div>
        <div class="l-drawer-left-body-item flex-row" style="min-height: 220px;">
          <div class="flex-1 white-box border-radius-4">
            <drawer-left-oganization3d></drawer-left-oganization3d>
          </div>
          <div class="flex-1 white-box border-radius-4">
            <drawer-left-oganization-case></drawer-left-oganization-case>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </drawer-left>
  </div>
</template>

<script>
import { drawerLeft } from '@/components'
import drawerLeftWarningPrediction from './drawerLeftWarningPrediction'
import drawerLeftFutureHour24 from './drawerLeftFutureHour24'
import drawerLeftYearAndPrediction from './drawerLeftYearAndPrediction'
import drawerLeftOganization3d from './drawerLeftOganization3d'
import drawerLeftOganizationCase from './drawerLeftOganizationCase'

export default {
  name: 'lDrawerLeft',
  components: {
    drawerLeft,
    drawerLeftWarningPrediction,
    drawerLeftFutureHour24,
    drawerLeftYearAndPrediction,
    drawerLeftOganization3d,
    drawerLeftOganizationCase
  }
}
</script>

<style lang="scss">
.l-drawer-left {
  &-body {
    &-item {
      &.flex-row {
        .flex-1 + .flex-1 {
          margin-left: 8px;
        }
      }
      & + .l-drawer-left-body-item {
        margin-top: 8px;
      }
    }
  }
}
</style>
