<template>
  <div class="l-drawer-left-table2-row3-linek white-box border-radius-4">
    <mini-card>
      <h4 slot="title">警情趋势</h4>
      <div slot="title-right" class="flex-row">
        <b class="font-15" @click="handleClickRefresh"><i class="el-icon-refresh bold"></i></b>
      </div>
      <div slot="default" class="echarts-box" v-loading="loading">
        <div class="inline-right">
          <el-button-group>
            <el-button
              size="mini"
              :class="buttonGroupSelected === 1 ? 'selected' : ''"
              @click="handleClickButtonGoupSelected(1)"
            >当天</el-button>
            <el-button
              size="mini"
              :class="buttonGroupSelected === 2 ? 'selected' : ''"
              @click="handleClickButtonGoupSelected(2)"
            >本周</el-button>
            <el-button
              size="mini"
              :class="buttonGroupSelected === 3 ? 'selected' : ''"
              @click="handleClickButtonGoupSelected(3)"
            >当月</el-button>
            <el-button
              size="mini"
              :class="buttonGroupSelected === 4 ? 'selected' : ''"
              @click="handleClickButtonGoupSelected(4)"
            >本年</el-button>
          </el-button-group>
        </div>
        <draw-echarts style="height: 300px;" :data="echartsData" :target="'alert-situation-analysis-drawer-left-table2-row4-linek'"></draw-echarts>
      </div>
    </mini-card>
  </div>
</template>

<script>
import { miniCard, drawEcharts } from '@/components'
export default {
  name: 'lDrawerLeftTable2Row3OLinek',
  components: {
    miniCard, drawEcharts
  },
  data () {
    return {
      loading: false,
      buttonGroupSelected: 1,
      echartsData: {}
    }
  },
  mounted () {
    this.ajaxHpfj110GetAllPillar()
  },
  methods: {
    ajaxHpfj110GetAllPillar () {
      this.loading = true
      this.$store.dispatch('ajaxHpfj110GetAllPillar', {
        classType: this.buttonGroupSelected
      }).then(res => {
        // cosole.log(res)
        if (res && res.data) {
          this.echartsData = res.data
        }
      }).finally(() => {
        this.loading = false
      })
    },
    handleClickButtonGoupSelected (mark) {
      if (mark && this.buttonGroupSelected !== mark) {
        this.buttonGroupSelected = mark
        this.ajaxHpfj110GetAllPillar()
      }
    },
    // 刷新数据
    handleClickRefresh () {
      this.ajaxHpfj110GetAllPillar()
    }
  }
}
</script>

<style lang="scss">
.l-drawer-left-table2-row3-linek {
  .echarts-box {
    height: 335px;
  }
}
</style>
