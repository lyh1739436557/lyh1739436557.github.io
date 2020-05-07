<template>
  <div class="g-filter-organization">
    <el-dropdown trigger="click" size="medium" class="g-filter-organization-item" @command="handleClickDropdownItem">
      <div class="inline-center pointer">
        <span class="font-14" style="color: #8B9198;">筛选</span>
        <span class="font-14" style="color: #3F454B;">组织结构</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
      <el-dropdown-menu slot="dropdown" class="g-filter-organization-dropdown">
        <el-dropdown-item
          v-for="(item, index) in dropdownList"
          :key="item.id"
          :hide-on-click="single"
          :command="index"
        ><span :class="item.selectStatus ? 'selected' : ''">{{ item.text }}</span></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { hpPoliceName } from '@/assets/js/fieldMap'

export default {
  name: 'gFilgerCoverage',
  props: {
    single: {
      type: Boolean, // 是否单选
      default: true
    }
  },
  data () {
    return {
      dropdownListModel: undefined,
      dropdownList: (function (hpPoliceName) {
        let result = [
          {
            id: 0,
            text: '全部',
            selectStatus: false
          }
        ]
        for (const key in hpPoliceName) {
          if (hpPoliceName.hasOwnProperty(key)) {
            result.push({
              id: key,
              text: hpPoliceName[key],
              selectStatus: false
            })
          }
        }
        return result
      })(hpPoliceName)
    }
  },
  computed: {
    dropdownListSelected () {
      return this.dropdownList.filter(curr => curr.selectStatus).map(curr => curr.id)
    }
  },
  methods: {
    handleClickDropdownItem (index) {
      if (index !== undefined && this.dropdownList[index]) {
        if (this.single) {
          this.dropdownList = this.dropdownList.map((curr, i) => {
            return {
              ...curr,
              selectStatus: Boolean(i === index)
            }
          })
        } else {
          if (this.dropdownList[index].selectStatus) {
            this.dropdownList[index].selectStatus = false
          } else {
            this.dropdownList[index].selectStatus = true
          }
        }
        const selected = this.dropdownList.filter(curr => curr.selectStatus).map(curr => curr.id)
        // console.log(selected)
        this.$emit('changeSelect', selected)
      }
    }
  }
}
</script>

<style lang="scss">
.g-filter-organization {
  width: 145px;
  height: 48px;
  justify-content: space-around;
  background: rgba(255,255,255,1);
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
  border-radius: 4px;
  &-item {
    width: 100%;
    height: 100%;
    line-height: 48px;
    font-size: 14px;
    color: #3F454B;
    box-sizing: border-box;
    padding: 0 8px;
  }
}
.g-filter-organization-dropdown .el-dropdown-menu__item .selected {
  color: #659bf8;
}
</style>
