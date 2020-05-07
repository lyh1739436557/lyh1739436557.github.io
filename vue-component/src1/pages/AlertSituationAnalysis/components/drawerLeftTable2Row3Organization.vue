<template>
  <div class="l-drawer-left-table2-row3-organization white-box border-radius-4">
    <mini-card>
      <h4 slot="title">各机构发案分布</h4>
      <div class="flex-row" slot="title-right">
        <b class="font-15" @click="handleClickRefresh"><i class="el-icon-refresh bold"></i></b>
      </div>
      <div slot="default" class="echarts-box">
        <draw-echarts v-loading="loading" :data="echartsData" :target="'alert-situation-analysis-drawer-left-table2-row3-organization'"></draw-echarts>
      </div>
    </mini-card>
  </div>
</template>

<script>
import { miniCard, drawEcharts } from '@/components'
export default {
  name: 'lDrawerLeftTable2Row3Organization',
  components: {
    miniCard, drawEcharts
  },
  mounted () {
    this.ajaxTSjdGetDwCaseSum()
  },
  data () {
    return {
      echartsData: {},
      loading: false
    }
  },
  methods: {
    ajaxTSjdGetDwCaseSum () {
      this.loading = true
      this.$store.dispatch('ajaxTSjdGetDwCaseSum').then(res => {
        console.log(res.data)
        if (res && res.data) {
          this.echartsData = res.data || {
            x: [],
            y: []
          }
        }
      }).finally(() => {
        this.loading = false
      })
    },
    handleClickRefresh () {
      this.ajaxTSjdGetDwCaseSum()
    }
  }
}
</script>

<style lang="scss">
.l-drawer-left-table2-row3-organization {
  .echarts-box {
    height: 260px;
  }
}
</style>
