<template>
  <div class="alert-situation-analysis">
    <filter-menu></filter-menu>
    <drawer-left></drawer-left>
    <alert-situation-analysis-map></alert-situation-analysis-map>
  </div>
</template>

<script>
import drawerLeft from './components/drawerLeft'
import filterMenu from './components/filterMenu'
import AlertSituationAnalysisMap from './components/AlertSituationAnalysisMap'
export default {
  name: 'alertSituationAnalysis',
  data () {
    return {
      chooseLayerIndex: []
    }
  },
  components: {
    drawerLeft, filterMenu, AlertSituationAnalysisMap
  }
}
</script>

<style lang="scss">
.alert-situation-analysis {
  height: 100%;
}
</style>
