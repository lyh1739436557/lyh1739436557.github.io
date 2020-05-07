<template>
  <div class="operating flex-col">
    <h3 class="operating-row flex-shrink">操作日志</h3>
    <div class="operating-row flex-shrink">
      <operating-search></operating-search>
    </div>
    <div class="operating-row operating-table flex-1">
      <operating-table></operating-table>
    </div>
  </div>
</template>

<script>
import operatingSearch from './components/operatingSearch'
import operatingTable from './components/operatingTable'
export default {
  name: 'operating',
  components: {
    operatingSearch, operatingTable
  }
}
</script>

<style lang="scss">
.operating {
  height: 100%;
  .operating-table {
    background-color: #fff;
  }
  .operating-row + .operating-row {
    margin-top: 8px;
  }
}
</style>
