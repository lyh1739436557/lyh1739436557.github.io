<template>
  <div class="authority-management-search flex-row search-box">
    <div class="search-item">
      <el-input v-model="likeName" :placeholder="'警号／姓名／手机号／所属机构'"></el-input>
    </div>
    <div class="search-item">
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lAuthorityManagementSearch',
  data () {
    return {
      likeName: ''
    }
  }
}
</script>
