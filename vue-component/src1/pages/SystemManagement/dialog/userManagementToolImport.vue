<template>
  <div class="d-user-management-tool-import">
    <el-dialog
      :visible.sync="dialogVisible"
      width="640px"
      :before-close="handleDialogClose"
      class="dialog-background-white"
      :modal-append-to-body="false"
    >
      <h3 slot="title">批量导入用户</h3>
      <div class="d-user-management-tool-import-body">
        <div class="dialog-background-white-body row-body">
          <div class="dialog-background-white-row">
            <b>1.点击下载导入模板</b>
          </div>
          <div class="dialog-background-white-row">
            <div>2.请按照模版中的要求填写</div>
          </div>
          <div class="dialog-background-white-row">
            <span>3.上传模版：</span>
            <el-button icon="el-icon-folder-opened" class="upload-model-button">上传文件</el-button>
          </div>
        </div>
      </div>
      <div slot="footer" class="d-user-management-tool-import-footer">
          <el-button class="upload-model-button">取消</el-button>
          <el-button class="upload-model-button">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import mixinsDialogc from '@/assets/mixins/dialogc'
import { hpPoliceName, sexMap } from '@/assets/js/fieldMap'

export default {
  name: 'dUserManagementToolImport',
  mixins: [ mixinsDialogc ],
  data () {
    return {
      ruleForm: {
        policeCode: '',
        policeName: '',
        policeSex: '',
        policeIDcard: '',
        policePhoneCode: '',
        policeOrganisation: ''
      },
      rules: {},
      hpPoliceName,
      sexMap
    }
  },
  methods: {
    handleDialogClose () {
      this.dialogVisible = false
    },
    handleClickAddUser () {
      console.log(this.ruleForm)
    }
  }
}
</script>

<style lang="scss">
.d-user-management-tool-import {
  &-body {
    line-height: 32px;
    font-size: 14px;
    color: #3F454B;
  }
  &-footer {
    padding: 0 24px;
  }
  .upload-model-button {
    color: #3E82F6;
    background-color: rgba(62, 130, 246, 0.1);
    border: none;
  }
}
</style>
