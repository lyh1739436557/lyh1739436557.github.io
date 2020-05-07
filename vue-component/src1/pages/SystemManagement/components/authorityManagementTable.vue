<template>
  <div class="l-authority-management-table">
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%"
      class="stripe-table">
      <el-table-column
        prop="date"
        label="报警时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="事件id"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="案由"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="警情类别"
        width="160">
      </el-table-column>
      <el-table-column
        prop="name"
        label="承担单位"
        width="160">
      </el-table-column>
      <el-table-column
        prop="name"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="name"
        label="身份地址">
      </el-table-column>
      <el-table-column
        prop="name"
        label="事件详情">
      </el-table-column>
      <el-table-column
        prop="address"
        width="80px"
        label="操作">
        <template slot-scope="">
          <b>详情</b>
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
.l-authority-management-table {
  margin: 16px 24px;
}
</style>
