<template>
  <div class="alarm-transfer-search search-box flex-row">
    <div class="search-item">
      <el-input v-model="likeName" :placeholder="'警号／姓名／手机号／所属机构'"></el-input>
    </div>
    <div class="search-item">
      <el-date-picker
      v-model="dateTimeRange"
      type="datetimerange"
      align="right"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['00:00:00', '00:00:00']"
    ></el-date-picker>
    </div>
    <div class="search-item">
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lOperatingSearch',
  data () {
    return {
      likeName: '',
      dateTimeRange: []
    }
  }
}
</script>
