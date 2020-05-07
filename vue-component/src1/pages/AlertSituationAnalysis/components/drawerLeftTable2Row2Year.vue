<template>
  <div class="l-drawer-left-table2-row2-year white-box border-radius-4">
    <mini-card>
      <h4 slot="title">今年警情数据分析</h4>
      <div class="flex-row" slot="title-right">
        <b class="font-15" title="刷新" @click="handleClickRefresh"><i class="el-icon-refresh bold"></i></b>
      </div>
      <div slot="default" class="echarts-box">
        <draw-echarts v-loading="loading" :data="data" :target="'alert-situation-analysis-drawer-left-table2-row2-year'"></draw-echarts>
      </div>
    </mini-card>
  </div>
</template>

<script>
import { miniCard, drawEcharts } from '@/components'
export default {
  name: 'lDrawerLeftTable2Row2Year',
  components: {
    miniCard, drawEcharts
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
  mounted () {
    this.ajaxTSjdGetNowJq()
  },
  methods: {
    // 警情分析-今年警情数据分析
    ajaxTSjdGetNowJq () {
      this.loading = true
      this.$store.dispatch('ajaxTSjdGetNowJq').then(res => {
        console.log(res)
        if (res.code === 200) {
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
    // 刷新
    handleClickRefresh () {
      this.ajaxTSjdGetNowJq()
    }
  }
}
</script>

<style lang="scss">
.l-drawer-left-table2-row2-year {
  .echarts-box {
    height: 210px;
  }
}
</style>
