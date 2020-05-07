<template>
  <div class="l-drawer-left-future-hour24">
    <mini-card>
      <h4 slot="title">未来24小时警情预测</h4>
      <div class="flex-row" slot="title-right">
        <b class="font-15" title="刷新" @click="handleClickRefresh"><i class="el-icon-refresh bold"></i></b>
      </div>
      <div class="echarts-box" v-loading="loading">
        <draw-echarts :data="echartsData" target="incidence-predictive-drawer-left-future-hour24"></draw-echarts>
      </div>
    </mini-card>
  </div>
</template>

<script>
import { miniCard, drawEcharts } from '@/components'

export default {
  name: 'lDrawerLetFutureHour24',
  components: {
    miniCard, drawEcharts
  },
  data () {
    return {
      loading: false,
      echartsData: {
        x: [],
        y1: [], // 实时
        y2: [] // 预测
      }
    }
  },
  mounted () {
    this.ajaxHpfj110GetBy24Future()
  },
  methods: {
    ajaxHpfj110GetBy24Future () {
      this.loading = true
      this.$store.dispatch('ajaxHpfj110GetBy24Future').then(res => {
        if (res && res.data) {
          this.echartsData = {
            x: res.data.x || [],
            y1: res.data.y1 || [], // 实时
            y2: res.data.y2 || [] // 预测
          }
        }
      }).finally(() => {
        this.loading = false
      })
    },
    handleClickRefresh () {
      this.ajaxHpfj110GetBy24Future()
    }
  }
}
</script>

<style lang="scss">
.l-drawer-left-future-hour24 {
  .echarts-box {
    width: 100%;
    height: 245px;
  }
}
</style>
