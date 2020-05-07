<template>
  <div class="l-operating-table">
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%"
      class="stripe-table">
      <el-table-column
        prop="$index"
        label="序号"
        width="55">
      </el-table-column>
      <el-table-column
        prop="date"
        label="管理员账号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="管理员姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="身份证号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="归属机构"
        width="200px">
      </el-table-column>
      <el-table-column
        prop="name"
        label="模块"
        width="150px">
      </el-table-column>
      <el-table-column
        prop="address"
        label="子模块">
      </el-table-column>
      <el-table-column
        prop="address"
        width="80px"
        label="操作">
        <template slot-scope="scope">
          <span>查询</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'lAlarmTransferTable',
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.l-operating-table {
  margin: 16px 24px;
}
</style>
