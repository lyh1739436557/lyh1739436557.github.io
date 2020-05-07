<template>
  <div class="l-drawer-left-oganization3d">
    <mini-card>
      <h4 slot="title">组织机构三维立体视图</h4>
      <div class="flex-row" slot="title-right">
        <b class="font-15" title="刷新" @click="handleClickRefresh"><i class="el-icon-refresh bold"></i></b>
      </div>
      <div class="echarts-box" v-loading="loading">
        <draw-echarts :data="ehcartsData" target="incidence-predictive-drawer-left-oganization3d"></draw-echarts>
      </div>
    </mini-card>
  </div>
</template>

<script>
import { miniCard, drawEcharts } from '@/components'

export default {
  name: 'lDrawerLeftOganization3d',
  components: {
    miniCard, drawEcharts
  },
  data () {
    return {
      loading: false,
      ehcartsData: []
    }
  },
  mounted () {
    this.ajaxHpfj110GetStereo()
  },
  methods: {
    ajaxHpfj110GetStereo () {
      this.loading = true
      this.$store.dispatch('ajaxHpfj110GetStereo').then(res => {
        if (res && res.data instanceof Array) {
          this.ehcartsData = res.data
          // {
          //   x: res.data.map(curr => curr.scbjsj), // 时间
          //   y: res.data.map(curr => curr.lb), // 警情类型
          //   z: res.data.map(curr => curr.cjdwmc), // 派出所名称
          //   val: res.data.map(curr => curr.num) // 警情数量
          // }
        }
      }).finally(() => {
        this.loading = false
      })
    },
    handleClickRefresh () {
      this.ajaxHpfj110GetStereo()
    }
  }
}
</script>

<style lang="scss">
.l-drawer-left-oganization3d {
  .echarts-box {
    width: 100%;
    height: 245px;
  }
}
</style>
