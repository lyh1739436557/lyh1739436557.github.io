<template>
  <div class="l-drawer-left-table2-row2-hours white-box border-radius-4" :class="fullScreen ? 'full-screen' : ''">
    <mini-card>
      <h4 slot="title">24小时发案分布</h4>
      <div class="flex-row" slot="title-right">
        <b class="font-15" title="刷新" @click="handleClickRefresh"><i class="el-icon-refresh bold"></i></b>
        <!-- <template  v-if="!fullScreen">
          <b class="font-15 bold" title="全屏" @click="handleClickFullScreen(true)"><i class="el-icon-full-screen"></i></b>
        </template>
        <template v-else>
          <b class="font-15 bold" title="关闭全屏" @click="handleClickFullScreen(false)"><i class="el-icon-close"></i></b>
        </template> -->
      </div>
      <div slot="default" class="echarts-box" ref="echarts-box">
        <draw-echarts v-loading="loading" :target="'alert-situation-analysis-drawer-left-table2-row2-hour'" :data="echartsData"></draw-echarts>
      </div>
    </mini-card>
  </div>
</template>

<script>
import { miniCard, drawEcharts } from '@/components'
export default {
  name: 'lDrawerLeftTable2Row2Hours',
  components: {
    miniCard, drawEcharts
  },
  mounted () {
    this.ajaxFaycJqfx24hourjqGetList()
  },
  data () {
    return {
      echartsData: [],
      loading: false,
      fullScreen: false
    }
  },
  methods: {
    ajaxFaycJqfx24hourjqGetList () {
      this.loading = true
      this.$store.dispatch('ajaxFaycJqfx24hourjqGetList').then(res => {
        // console.log(res)
        if (res && res.data instanceof Array) {
          let temp = {}
          res.data.forEach(curr => {
            // parseFloat(curr.time), parseFloat(curr.num), curr.bjl
            if (!temp[curr.bjl]) {
              temp[curr.bjl] = []
            }
            temp[curr.bjl].push([parseFloat(curr.time), parseFloat(curr.num), curr.bjl])
          })
          this.echartsData = Object.values(temp)
        }
      }).finally(() => {
        this.loading = false
      })
    },
    // 刷新
    handleClickRefresh () {
      this.ajaxFaycJqfx24hourjqGetList()
    }
  }
}
</script>

<style lang="scss">
.l-drawer-left-table2-row2-hours {
  transition: all .3s;
  .echarts-box {
    height: 210px;
  }
}
</style>
