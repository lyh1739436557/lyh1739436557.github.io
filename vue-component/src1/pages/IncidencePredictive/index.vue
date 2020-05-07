<template>
  <div class="incidence-predictive">
    <filter-menu></filter-menu>
    <drawer-left></drawer-left>
    <incidence-predictive-map></incidence-predictive-map>
  </div>
</template>

<script>
import drawerLeft from './components/drawerLeft'
import filterMenu from './components/filterMenu'
import incidencePredictiveMap from './components/IncidencePredictiveMap'
export default {
  name: 'incidencePredictive',
  components: {
    drawerLeft, filterMenu, incidencePredictiveMap
  }
}
</script>
