<template>
  <div class="g-home-user">
    <div class="g-home-user-dropdown">
      <el-dropdown trigger="click" size="medium" placement="bottom-start" class="absolute-center" @command="handleClickDropdownMenucommand">
        <div class="dorpdown-link inline-center pointer select-none">
          <img src="../../assets/img/ic_top_user.png" class="pointer" />
        </div>
        <el-dropdown-menu slot="dropdown" class="big-dropdown home-user-dropdown">
            <el-dropdown-item class="home-user-dropdown-board flex-row" disabled>
              <div class="board-left">
                <img src="../../assets/img/ic_top_user.png" />
              </div>
              <div class="board-right">
                <div class="name">王二麻</div>
                <div class="police-id">警号：{{ '130782' }}</div>
              </div>
            </el-dropdown-item>
          <template v-for="(item, index) in dropdownList">
            <el-dropdown-item :key="index" :command="item.command">
              <i :class="item.icon"></i>
              <span>{{ item.text }}</span>
            </el-dropdown-item>
          </template>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <dialog-user-board ref="dialogUserBoard"></dialog-user-board>
    <dialog-update-password ref="dialogUpdatePassword"></dialog-update-password>
    <dialog-user-logout ref="dialogUserLogout"></dialog-user-logout>
  </div>
</template>

<script>
import dialogUserBoard from './dialog/userBoard'
import dialogUpdatePassword from './dialog/updatePassword'
import dialogUserLogout from './dialog/userLogout'

export default {
  name: 'gHomeUser',
  components: {
    dialogUserBoard, dialogUpdatePassword, dialogUserLogout
  },
  data () {
    return {
      dropdownList: [
        {
          text: '个人资料',
          icon: 'el-icon-s-custom',
          command: '1'
        }, {
          text: '修改密码',
          icon: 'el-icon-key',
          command: '2'
        }, {
          text: '退出登录',
          icon: 'el-icon-switch-button',
          command: '3'
        }
      ]
    }
  },
  methods: {
    handleClickDropdownMenucommand (command) {
      // console.log(command)
      switch (command) {
        case '1':
          this.$refs['dialogUserBoard'].handleOpenDialog()
          break
        case '2':
          this.$refs['dialogUpdatePassword'].handleOpenDialog()
          break
        case '3':
          this.$refs['dialogUserLogout'].handleOpenDialog()
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss">
.g-home-user {
  &-dropdown {
    width: 50px;
    height: 50px;
    position: relative;
    .dorpdown-link {
      width: 50px;
      height: 50px;
    }
  }
  .row-title {
    font-size: 14px;
    color: #8B9198;
    padding: 20px 30px;
  }
  .row-body {
    padding: 0 30px 20px;
    line-height: 2.7em;
    font-size: 14px;
  }
}

.home-user-dropdown {
  li.home-user-dropdown-board {
    height: 50px !important;
    line-height: 24px !important;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #404752;
    .board-left {
      width: 48px;
      height: 48px;
      img {
        width: 48px;
        height: 48px;
        border: rgba($color: #000000, $alpha: .1);
        border-radius: 50%;
      }
    }
    .board-right {
      margin-left: 12px;
      .name {
        font-size: 14px;
        color: #fff;
      }
      .police-id {
        font-size: 12px;
        color: #CBDEFF;
      }
    }
    &:hover {
      background-color: #404752;
    }
  }
}
</style>
