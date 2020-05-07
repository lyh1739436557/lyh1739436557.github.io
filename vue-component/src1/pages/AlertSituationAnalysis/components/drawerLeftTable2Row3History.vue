<template>
  <div class="l-drawer-left-table2-row3-history white-box border-radius-4">
    <mini-card>
      <h4 slot="title">历史警情数据分析</h4>
      <div class="flex-row" slot="title-right">
        <b class="font-15" @click="handleClickRefresh"><i class="el-icon-refresh bold"></i></b>
      </div>
      <div slot="default" class="echarts-box">
        <draw-echarts v-loading="loading" :data="data" :target="'alert-situation-analysis-drawer-left-table2-row3-history'"></draw-echarts>
      </div>
    </mini-card>
  </div>
</template>

<script>
import { miniCard, drawEcharts } from '@/components'
export default {
  name: 'lDrawerLeftTable2Row3History',
  components: {
    miniCard, drawEcharts
  },
  mounted () {
    this.ajaxTSjdGetYearJq()
  },
  data () {
    return {
      data: {
        broken: {
          x: [], y: []
        },
        columnar: {
          x: [], y: []
        }
      },
      loading: false
    }
  },
  methods: {
    ajaxTSjdGetYearJq () {
      this.loading = true
      this.$store.dispatch('ajaxTSjdGetYearJq').then(res => {
        console.log(res)
        if (res && res.data) {
          this.data = res.data || {
            broken: {
              x: [], y: []
            },
            columnar: {
              x: [], y: []
            }
          }
        }
      }).finally(() => {
        this.loading = false
      })
    },
    handleClickRefresh () {
      this.ajaxTSjdGetYearJq()
    }
  }
}
</script>

<style lang="scss">
.l-drawer-left-table2-row3-history {
  .echarts-box {
    height: 260px;
  }
}
</style>
