<template>
  <div class="g-home-user-dialog-update-password">
    <el-dialog
      :visible.sync="dialogVisible"
      width="640px"
      :before-close="handleDialogClose"
      @opened="handleDialogOpend"
      class="dialog-gradient-title"
      :modal-append-to-body="false"
    >
      <div slot="title">修改密码</div>
      <div>
        <div class="dialog-gradient-title-row white-box base-info">
          <div class="update-password-title row-title">
            <i class="el-icon-lock"></i>
            <span>重置密码</span>
          </div>
          <div class="update-password-body row-body">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="update-password-body-row">
              <el-form-item label="登录账号">
                <div>{{ ruleForm.u }}</div>
              </el-form-item>
              <el-form-item label="输入旧密码" prop="pOld">
                <el-input type="password" v-model="ruleForm.pOld" placeholder="输入旧密码"></el-input>
              </el-form-item>
              <el-form-item label="输入新密码" prop="p1">
                <el-input type="password" v-model="ruleForm.p1" class="flex-shrink" placeholder="输入新密码">
                  <div slot="suffix">必须是6-20个英文字母、数字或符号</div>
                </el-input>
              </el-form-item>
              <el-form-item label="确认新密码" prop="p2">
                <el-input type="password" v-model="ruleForm.p2" placeholder="确认新密码"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary">确定修改</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div slot="footer"></div>
    </el-dialog></div>
</template>

<script>
import mixinsDialogc from '@/assets/mixins/dialogc'

export default {
  name: 'gHomeUserDialog',
  mixins: [ mixinsDialogc ],
  data () {
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.p1) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        u: '4534254',
        pOld: '',
        p1: '',
        p2: ''
      },
      rules: {
        pOld: [
          { required: true, message: '请输入正确的旧密码', trigger: 'blur' }
        ],
        p1: [
          { required: true, message: '请输入满足条件的新密码', trigger: 'blur' }
        ],
        p2: [
          { required: true, message: '请确认新密码', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleDialogClose () {
      this.dialogVisible = false
    },
    handleDialogOpend () {
      if (this.$refs['ruleForm'] && this.$refs['ruleForm'].resetFields) {
        this.$refs['ruleForm'].resetFields()
      }
    }
  }
}
</script>

<style lang="scss">
.g-home-user-dialog-update-password {
  .update-password-body {
    padding-bottom: 5px;
    input[type="text"], input[type="password"] {
      width: 240px;
    }
    .el-input__suffix {
      font-size: 12px;
      color: #8B9198;
      left: 248px;
      right: initial;
    }
    .el-input--small .el-input__inner {
      height: 36px;
      line-height: 36px;
      background:rgba(105, 138, 177, 0.08);
      border-top: none;
      border-left: none;
      border-right: none;
      // border-bottom-color: rgba(139,145,152,0.32);
      border-radius:4px 4px 0px 0px;
      &:focus {
        background:rgba(13,145,152,0.04);
      }
    }
  }
}
</style>
