<template>
  <div class="l-drawer-left-year-and-prediction">
    <mini-card>
      <h4 slot="title">当月警情数与预测警情数</h4>
      <div class="flex-row" slot="title-right">
        <b class="font-15" title="刷新" @click="handleClickRefresh"><i class="el-icon-refresh bold"></i></b>
      </div>
      <div class="echarts-box" v-loading="loading">
        <draw-echarts :data="echartsData" target="incidence-predictive-drawer-left-year-and-prediction"></draw-echarts>
      </div>
    </mini-card>
  </div>
</template>

<script>
import { miniCard, drawEcharts } from '@/components'

export default {
  name: 'lDrawerLeftYearAndPrediction',
  components: {
    miniCard, drawEcharts
  },
  data () {
    return {
      loading: false,
      echartsData: {
        x: [],
        y1: [], // 实时警情
        y2: [], // 常见警情
        y3: [] // 预测警情
      }
    }
  },
  mounted () {
    this.ajaxHpfj110GetByMonth()
  },
  methods: {
    ajaxHpfj110GetByMonth () {
      this.loading = true
      this.$store.dispatch('ajaxHpfj110GetByMonth').then(res => {
        // console.log(res)
        if (res && res.data) {
          this.echartsData = {
            x: (res.data.x && res.data.x instanceof Array) ? res.data.x : [],
            y1: (res.data.y1 && res.data.y1 instanceof Array) ? res.data.y1.map(curr => {
              return (window.isNaN(parseFloat(curr)) ? 0 : parseFloat(curr))
            }) : [],
            y2: (res.data.y2 && res.data.y2 instanceof Array) ? res.data.y2.map(curr => {
              return (window.isNaN(parseFloat(curr)) ? 0 : parseFloat(curr))
            }) : [],
            y3: (res.data.y3 && res.data.y3 instanceof Array) ? res.data.y3.map(curr => {
              return (window.isNaN(parseFloat(curr)) ? 0 : parseFloat(curr))
            }) : [],
          }
        }
      }).finally(() => {
        this.loading = false
      })
    },
    handleClickRefresh () {
      this.ajaxHpfj110GetByMonth()
    }
  }
}
</script>

<style lang="scss">
.l-drawer-left-year-and-prediction {
  .echarts-box {
    height: 245px;
  }
}
</style>
