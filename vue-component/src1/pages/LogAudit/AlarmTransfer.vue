<template>
  <div class="alarm-transfer flex-col">
    <h3 class="alarm-transfer-row flex-shrink">警情传输日志</h3>
    <div class="alarm-transfer-row flex-shrink search-box">
      <alarm-transfer-search></alarm-transfer-search>
    </div>
    <div class="alarm-transfer-row table-box flex-1">
      <alarm-transfer-table></alarm-transfer-table>
    </div>
  </div>
</template>

<script>
import alarmTransferSearch from './components/alarmTransferSearch'
import alarmTransferTable from './components/alarmTransferTable'
export default {
  name: 'alarmTransfer',
  components: {
    alarmTransferTable, alarmTransferSearch
  }
}
</script>

<style lang="scss">
.alarm-transfer {
  height: 100%;
  box-sizing: border-box;
  .table-box {
    background-color: #fff;
  }
  .alarm-transfer-row + .alarm-transfer-row {
    margin-top: 8px;
  }
}
</style>
