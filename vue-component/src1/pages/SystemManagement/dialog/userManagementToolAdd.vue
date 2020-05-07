<template>
  <div class="d-user-management-tool-add">
    <el-dialog
      :visible.sync="dialogVisible"
      width="640px"
      :before-close="handleDialogClose"
      class="dialog-background-white"
      :modal-append-to-body="false"
    >
      <h3 slot="title">新增用户</h3>
      <div>
        <div class="dialog-background-white-row white-box base-info">
          <div class="dialog-background-white-body row-body">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" width="560px" class="dialog-background-white-body-row">
              <el-form-item label="警号" prop="policeCode">
                <el-input type="text" v-model="ruleForm.policeCode" placeholder="输入警号"></el-input>
              </el-form-item>
              <el-form-item label="姓名" prop="policeName">
                <el-input type="text" v-model="ruleForm.policeName" placeholder="输入警员姓名"></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="policeSex">
                <el-radio-group v-model="ruleForm.policeSex">
                  <el-radio v-for="(value, key) in sexMap" :key="key" :label="key">{{ value }}</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="身份证号" prop="policeIDcard">
                <el-input type="text" v-model="ruleForm.policeIDcard" placeholder="输入警员身份证号"></el-input>
              </el-form-item>
              <el-form-item label="手机号" prop="policePhoneCode">
                <el-input type="text" v-model="ruleForm.policePhoneCode" placeholder="输入警员手机号"></el-input>
              </el-form-item>
              <el-form-item label="所属机构" prop="policeOrganisation">
                <el-select v-model="ruleForm.policeOrganisation" placeholder="请选择所属机构">
                  <el-option v-for="(item, key) in hpPoliceName" :key="key" :label="item" :value="key"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="handleClickAddUser">新 增</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import mixinsDialogc from '@/assets/mixins/dialogc'
import { hpPoliceName, sexMap } from '@/assets/js/fieldMap'

export default {
  name: 'dUserManagementToolAdd',
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
.d-user-management-tool-add {
  &-body {
    font-size: 12px;
  }
}
</style>
