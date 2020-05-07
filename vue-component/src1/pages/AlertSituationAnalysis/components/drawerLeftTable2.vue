<template>
  <div class="l-drawer-left-table-2">
    <div class="l-drawer-left-table-2-row">
      <table2-row1></table2-row1>
    </div>
    <div class="l-drawer-left-table-2-row flex-row">
      <table2-row2-hours class="item flex-1"></table2-row2-hours>
      <table2-row2-year class="item flex-1"></table2-row2-year>
    </div>
    <div class="l-drawer-left-table-2-row flex-row">
      <table2-row3-history class="item flex-1"></table2-row3-history>
      <table2-row3-organization class="item flex-1"></table2-row3-organization>
    </div>
    <div class="l-drawer-left-table-2-row flex-row">
      <table2-row4-linek class="item flex-1"></table2-row4-linek>
    </div>
  </div>
</template>

<script>
import table2Row1 from './drawerLeftTable2Row1'
import table2Row2Hours from './drawerLeftTable2Row2Hours'
import table2Row2Year from './drawerLeftTable2Row2Year'
import table2Row3History from './drawerLeftTable2Row3History'
import table2Row3Organization from './drawerLeftTable2Row3Organization'
import table2Row4Linek from './drawerLeftTable2Row4Linek'

export default {
  name: 'lDrawerLeftTable2',
  components: {
    table2Row1, table2Row2Hours, table2Row2Year, table2Row3History, table2Row3Organization, table2Row4Linek
  }
}
</script>

<style lang="scss">
.l-drawer-left-table-2 {
  &-row {
    margin-top: 8px;
    .item {
      & + .item {
        margin-left: 8px;
      }
    }
  }
}
</style>
