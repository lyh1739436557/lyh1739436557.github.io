<template>
  <div class="g-home-menu flex-row">
    <div class="g-home-menu-logo flex-shrink">
      <img src="../../assets/img/logo.png" class="absolute-center" />
    </div>
    <div class="g-home-menu-box flex-1">
      <el-dropdown trigger="click" size="medium" placement="bottom" @command="handleClickDropdown">
        <div class="inline-center pointer select-none home-menu-dropdown-link">
          <span class="font-18">{{ dropdownName }}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <el-dropdown-menu slot="dropdown" class="big-dropdown home-menu-dropdown">
          <template v-for="(item, index) in dropdownListLimit">
            <el-dropdown-item :key="index" :command="item">{{ item.text }}</el-dropdown-item>
          </template>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gHomeMenu',
  data () {
    return {
      dropdownName: this.$route.meta.moduleName[0] || '',
      dropdownList: [
        {
          text: '警情分析',
          limit: true,
          command: {
            name: 'alertSituationAnalysis'
          }
        }, {
          text: '发案预测',
          limit: true,
          command: {
            name: 'incidencePredictive'
          }
        }, {
          text: '日志审计',
          limit: true,
          command: {
            name: 'alarmTransfer'
          }
        }, {
          text: '系统管理',
          limit: true,
          command: {
            name: 'userManagement',
            params: {
              policeId: 1
            }
          }
        }
      ]
    }
  },
  watch: {
    '$route' (newVal) {
      this.dropdownName = newVal.meta.moduleName[0] || ''
    }
  },
  computed: {
    dropdownListLimit () {
      return this.dropdownList.filter(curr => curr.limit)
    }
  },
  methods: {
    handleClickDropdown (command) {
      // console.log(command)
      if (command) {
        if (this.dropdownName !== command.text) {
          this.dropdownName = command.text
          this.$router.push(command.command)
        }
      } else {
        console.error('handleClickDropdown was not arguments[0]!')
      }
    }
  }
}
</script>

<style lang="scss">
.g-home-menu {
  width: 490px;
  height: 48px;
  box-shadow:0px 2px 4px 0px rgba(0,0,0,0.2);
  border-radius:4px;
  &-logo {
    width: 330px;
    height: 100%;
    background: linear-gradient(90deg,rgba(22,175,252,1) 0%,rgba(22,104,255,1) 100%);
    position: relative;
    img {
      width: 308px;
    }
  }
  &-box {
    .el-dropdown {
      width: 100%;
      height: 48px;
      line-height: 48px;
    }
    .home-menu-dropdown-link {
      color: #3E82F6;
      background-color: #fff;
    }
  }
}

.big-dropdown {
  width: 160px;
}
</style>
