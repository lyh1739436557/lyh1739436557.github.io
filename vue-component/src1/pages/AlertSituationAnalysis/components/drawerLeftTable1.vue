<template>
  <div class="l-drawer-left-table-1 flex-col" v-loading="loading">
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%; overflow: auto;"
      class="stripe-table"
    >
      <el-table-column prop="dateTime" label="时间" width="180"></el-table-column>
      <el-table-column prop="alertSituationType" label="警情类别" width="150">
        <template slot-scope="scope">
          <div class="clamp-1" :title="scope.row.alertSituationType">{{ scope.row.alertSituationType }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="alertSituationDesc" label="警情描述">
        <template slot-scope="scope">
          <div class="clamp-1" :title="scope.row.alertSituationDesc">{{ scope.row.alertSituationDesc }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="alertSituationstatus" label="状态" width="90"></el-table-column>
    </el-table>

    <el-pagination
      slot="footer"
      class="inline-right"
      @size-change="handleRealTimeAlertSizeChange"
      @current-change="handleRealTimeAlertCurrChange"
      :current-page="tablePageData.currentPage"
      :page-sizes="tablePageData.pageSizes"
      :page-size="tablePageData.pageSize"
      :layout="tablePageData.layout"
      :total="tablePageData.total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'lAlarmTransferTable',
  data () {
    return {
      loading: false,
      tableData: [],
      tablePageData: {
        currentPage: 1,
        pageSize: 20,
        total: 0,
        pageSizes: [10, 20, 30, 50],
        layout: 'total, sizes, prev, pager, next, jumper'
      }
    }
  },
  mounted () {
    this.ajaxFaycSsjqListGetList()
  },
  methods: {
    // 获取数据
    ajaxFaycSsjqListGetList () {
      this.loading = true
      let params = {
        startTimeStr: +new Date(),
        endTimeStr: +new Date(),
        page: this.tablePageData.currentPage,
        rows: this.tablePageData.pageSize
      }
      this.$store.dispatch('ajaxFaycSsjqListGetList', params).then(res => {
        // console.log(res)
        if (res && res.data instanceof Array) {
          this.tableData = res.data.map(curr => {
            return {
              dateTime: curr.scbjsj || '-', // 时间
              alertSituationType: curr.aymc || '-', // 警情类别
              alertSituationDesc: curr.sjxq || '-', // 警情描述
              alertSituationstatus: curr.zt || '-' // 状态
            }
          })
          this.tablePageData.currentPage = res.currentPage
          this.tablePageData.pageSize = res.pageSize
          this.tablePageData.total = res.total
        }
      })
      .catch(res => {
        console.log(res)
      })
      .finally(() => {
        this.loading = false
      })
    },
    // table-1 分页逻辑-每页数量发生更改
    handleRealTimeAlertSizeChange (pageSize) {
      // console.log(arguments)
      this.tablePageData.currentPage = 1
      this.tablePageData.pageSize = pageSize
      this.ajaxFaycSsjqListGetList()
    },
    // table-1 分页逻辑-页码发生更改
    handleRealTimeAlertCurrChange (pageCurr) {
      this.tablePageData.currentPage = pageCurr
      this.ajaxFaycSsjqListGetList()
    }
  }
}
</script>

<style lang="scss">
.l-drawer-left-table-1 {
  height: 100%;
  font-size: 16px;
  background-color: #fff;
}
</style>
