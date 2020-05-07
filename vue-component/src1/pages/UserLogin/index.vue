<template>
  <div class="user-login">
    <div class="absolute-center flex-row">
      <div class="user-login-board select-none">
        <img src="../../assets/svg/sign_board.svg" />
      </div>
      <div class="user-login-form">
        <div class="form-title form-item-border bold">账号登录</div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="form-item">
          <el-form-item prop="u">
            <el-input type="text" v-model="ruleForm.u" prefix-icon="el-icon-plus" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="p">
            <el-input type="password" v-model="ruleForm.p" prefix-icon="el-icon-plus" placeholder="请输入密码"></el-input>
          </el-form-item>
        </el-form>
        <div class="form-item font-12">
          <b class="underline right">忘记密码？</b>
          <el-checkbox class="forget" v-model="remember">记住我</el-checkbox>
        </div>
        <div class="form-item">
          <el-button type="primary">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'userLogin',
  data () {
    return {
      ruleForm: {
        u: '',
        p: ''
      },
      rules: {
        u: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        p: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      remember: false
    }
  },
  computed: {
    username () {
      console.log(this.$store.state.user.u)
      return this.$store.state.user.u
    }
  }
}
</script>

<style lang="scss">
.user-login {
  width: 100%;
  height: 100%;
  margin: auto;
  justify-content: space-around;
  position: relative;
  &-board {
    width: 760px;
    height: 380px;
    img {
      height: 480px;
    }
  }
  &-form {
    width: 340px;
    height: 380px;
    background-image: url('../../assets/svg/sign_form_bg.svg');
    background-size: contain;
    background-repeat: no-repeat;
    overflow: hidden;
    transition: all .3s;
    box-sizing: border-box;
    padding: 40px 30px;
    .form-title {
      line-height: 36px;
      margin-top: 20px;
      font-size: 16px;
      color: #3F454B;
      white-space: nowrap;
      letter-spacing: 1px;
    }
    .form-item {
      & + .form-item {
        margin-top: 10px;
      }
      &-border {
        border-bottom: 1px solid #d8d8d8;
      }
      .forget {
        color: rgba(10,18,33,0.64);
      }

      .el-button {
        width: 100%;
        height: 40px;
        font-size: 14px;
      }
    }
    .el-form {
      margin: 30px 0;
      &-item {
        padding-top: 10px;
        .el-input--small .el-input__inner {
          height: 36px;
          line-height: 36px;
          background:rgba(139,145,152,0.08);
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
  }
}
</style>
