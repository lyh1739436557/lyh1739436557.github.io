<template>
  <div class="g-home-user-dialog-user-logout">
    <el-dialog
      :visible.sync="dialogVisible"
      width="640px"
      :before-close="handleClose"
      class="dialog-gradient-title"
      :modal-append-to-body="false"
    >
      <div slot="title">用户登出</div>
      <div>
        <div class="dialog-gradient-title-row white-box base-info">
          <div class="user-board-title row-title inline-center">
            <h4>确定退出该账号？</h4>
          </div>
          <div class="user-board-title row-title inline-center">
            <el-button type="primary">确定</el-button>
            <el-button>取消</el-button>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </el-dialog>
  </div>
</template>

<script>
import mixinsDialogc from '@/assets/mixins/dialogc'

export default {
  name: 'gHomeUserDialogUserLogout',
  mixins: [ mixinsDialogc ],
  methods: {
    handleClose () {
      this.dialogVisible = false
    }
  }
}
</script>
