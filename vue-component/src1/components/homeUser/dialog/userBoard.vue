<template>
  <div class="g-home-user-dialog-user-board">
    <el-dialog
      :visible.sync="dialogVisible"
      width="640px"
      :before-close="handleClose"
      class="dialog-gradient-title"
      :modal-append-to-body="false"
    >
      <div slot="title">个人资料</div>
      <div>
        <div class="dialog-gradient-title-row white-box base-info">
          <div class="user-board-title row-title">
            <span class="right pointer">
              <i class="el-icon-edit"></i>
              <span>编辑</span>
            </span>
            <i class="el-icon-user-solid"></i>
            <span>基本信息</span>
          </div>
          <div class="user-board-body row-body">
            <div class="user-board-body-row flex-row" v-for="(rows,index) in baseInfoData" :key="index">
              <div class="item flex-row flex-1" v-for="(item, i) in rows" :key="i">
                <div class="label inline-right">{{ item.label }}</div>
                <div class="value">{{ item.value }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="dialog-gradient-title-row white-box head-picture">
          <div class="user-board-title row-title">
            <i class="el-icon-user-solid primary"></i>
            <span>修改头像</span>
          </div>
          <div class="user-board-body row-body flex-row">
            <div class="head-picture-update flex-1">
              <div class="update-box flex-col">
                <div class="absolute-center">
                  <div class="update-button">
                    <el-button icon="el-icon-upload">上传头像</el-button>
                  </div>
                  <div class="update-desc">
                    <div class="inline-center">仅支持png/jpg/gif格式</div>
                    <div class="inline-center">不超过100KB</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="head-picture-preview flex-1">
              <div class="preview-box">
                <div class="absolute-center">
                  <i class="el-icon-picture select-none" style="font-size: 48px; color: #637DA8;"></i>
                </div>
              </div>
            </div>
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
  name: 'gHomeUserDialog',
  mixins: [ mixinsDialogc ],
  data () {
    return {
      baseInfoData: [
        [
          { label: '账号', value: '123465976' },
          { label: '角色', value: '普通管理员' }
        ], [
          { label: '姓名', value: '王警官' },
          { label: '性别', value: '男' }
        ], [
          { label: '警号', value: '123003' },
          { label: '电话', value: '18812345676' }
        ], [
          { label: '所属机构', value: '所属机构名称所属机构名称' }
        ], [
          { label: '辖区', value: '上海市普陀区大渡河路1895号' }
        ]
      ]
    }
  },
  methods: {
    handleClose () {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss">
.g-home-user-dialog-user-board {
  .user-board-title {
    i.primary {
      background-color: #8B9198;
      color: #fff;
      border-radius: 50%;
    }
  }
  .base-info {
    .label {
      width: 68px;
      color: #8B9198;
    }
    .value {
      color: #3F454B;
      margin-left: 15px;
    }
  }
  .head-picture {
    &-update {
      .update-box {
        width: 240px;
        height: 180px;
        margin: auto;
        background: rgba(62,130,246,0.06);
        border: 1px solid rgba(99,125,168,0.24);
        border-radius: 4px;
        position: relative;
        .update-button {
          width: 128px;
          margin: 0 auto;
          button {
            width: 100%;
          }
        }
        .update-desc {
          font-size: 12px;
          color: #8B9198;
          margin-top: 16px;
          line-height: 20px;
        }
      }
    }
    &-preview {
      border-left: 1px solid #D1D6DB;
      .preview-box {
        width: 240px;
        height: 180px;
        margin: auto;
        position: relative;
      }
    }
  }
}
</style>
