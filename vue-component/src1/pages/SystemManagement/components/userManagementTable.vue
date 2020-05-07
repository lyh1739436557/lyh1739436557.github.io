<template>
  <div class="l-user-management-table">
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%"
      class="stripe-table">
      <el-table-column
        prop="date"
        label="警号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="姓名"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="性别"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="身份证号"
        width="160">
      </el-table-column>
      <el-table-column
        prop="name"
        label="手机号"
        width="160">
      </el-table-column>
      <el-table-column
        prop="name"
        label="所属机构">
      </el-table-column>
      <el-table-column
        prop="address"
        width="120px"
        label="操作">
        <template slot-scope="">
          <b>修改</b>
          <b>删除</b>
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
.l-user-management-table {
  margin: 16px 24px;
}
</style>
