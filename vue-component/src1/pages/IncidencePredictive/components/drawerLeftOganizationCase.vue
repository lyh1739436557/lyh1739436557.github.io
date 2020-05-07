<template>
  <div class="l-drawer-left-oganization-case">
    <mini-card>
      <h4 slot="title">组织机构案由数量预测</h4>
      <div class="flex-row" slot="title-right">
        <b class="font-15" title="刷新" @click="handleClickRefresh"><i class="el-icon-refresh bold"></i></b>
      </div>
      <div class="echarts-box" v-loading="loading">
        <draw-echarts :data="echartsData" target="incidence-predictive-drawer-left-oganization-case"></draw-echarts>
      </div>
    </mini-card>
  </div>
</template>

<script>
import { miniCard, drawEcharts } from '@/components'

export default {
  name: 'lDrawerLeftOganizationCase',
  components: {
    miniCard, drawEcharts
  },
  data () {
    return {
      loading: false,
      echartsData: []
    }
  },
  mounted () {
    this.ajaxCntTypeFullPredGetOffice()
  },
  methods: {
    ajaxCntTypeFullPredGetOffice () {
      this.loading = true
      this.$store.dispatch('ajaxCntTypeFullPredGetOffice').then(res => {
        if (res && res.data) {
          this.echartsData = res.data
        }
      }).finally(() => {
        this.loading = false
      })
    },
    handleClickRefresh () {
      this.ajaxCntTypeFullPredGetOffice()
    }
  }
}
</script>

<style lang="scss">
.l-drawer-left-oganization-case {
  .echarts-box {
    width: 100%;
    height: 245px;
  }
}
</style>
