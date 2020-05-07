<template>
  <ul class="g-filter-coverage flex-row select-none">
    <li
      class="g-filter-coverage-item flex-1"
      v-for="(item, index) in menuList"
      :key="item.id"
      v-loading="item.loading"
      element-loading-spinner="el-icon-loading"
      element-loading-text="loading..."
    >
      <div
        class="content pointer flex-row"
        :class="item.selectStatus ? 'selected' : ''"
        @click="handleClickMenuItem(index)"
      >
        <img :src="item.selectStatus ? item.selectIcon : item.icon" class="content-icon" />
        <span>{{ item.text }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
/**
 * emit 说明：
 * this.$emit('change', selectArray, done)
 * selectArray: 参数回传为选中的id数组和一个回调函数
 * done: 回调函数第一个参数表示此次请求是否成功，
 * done: 回调函数第二个参数表示回调成功的ids，一般指emit的第一参数
 *  */
import coveragerl from '@/assets/img/icon/coverage_rl.png'
import coveragerls from '@/assets/img/icon/coverage_rl_s.png'
import coveragelw from '@/assets/img/icon/coverage_lw.png'
import coveragelws from '@/assets/img/icon/coverage_lw_s.png'
import coveragejh from '@/assets/img/icon/coverage_jh.png'
import coveragejhs from '@/assets/img/icon/coverage_jh_s.png'
import coveragezt from '@/assets/img/icon/coverage_zt.png'
import coveragezts from '@/assets/img/icon/coverage_zt_s.png'
export default {
  name: 'gFilgerCoverage',
  props: {
    single: {
      type: Boolean, // 是否单选
      default: false
    }
  },
  data () {
    return {
      menuList: [
        {
          id: '1',
          icon: coveragerl,
          text: '网格',
          selectStatus: true,
          selectIcon: coveragerls,
          loading: false
        }, {
          id: '2',
          icon: coveragelw,
          text: '蜂窝',
          selectStatus: false,
          selectIcon: coveragelws,
          loading: false
        },  {
          id: '3',
          icon: coveragezt,
          text: '柱体',
          selectStatus: false,
          selectIcon: coveragezts,
          loading: false
        }
      ]
    }
  },
  methods: {
    // loading关闭
    loadingDone (bool, ids) {
      this.menuList = this.menuList.map(curr => {
        if (ids.indexOf(curr.id) !== -1) {
          return {
            ...curr,
            selectStatus: bool,
            loading: false
          }
        } else {
          return curr
        }
      })
    },
    handleClickMenuItem (index) {
      if (index !== undefined && this.menuList[index]) {
        if (this.single) {
          this.menuList = this.menuList.map((curr, i) => {
            return {
              ...curr,
              selectStatus: curr.selectStatus ? false : Boolean(i === index),
              loading: curr.selectStatus ? false : Boolean(i === index)
            }
          })
        } else {
          if (this.menuList[index].selectStatus) {
            this.menuList[index].selectStatus = false
          } else {
            this.menuList[index].selectStatus = true
            this.menuList[index].loading = true
          }
        }
        const selected = this.menuList.filter(curr => curr.selectStatus).map(curr => curr.id)
        // console.log(selected)
        this.$emit('change', selected, this.loadingDone)
      }
    }
  }
}
</script>

<style lang="scss">
.g-filter-coverage {
  width: 335px;
  height: 48px;
  justify-content: space-around;
  background: rgba(255,255,255,1);
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
  border-radius: 4px;
  &-item {
    font-size: 14px;
    color: #3F454B;
    list-style: none;
    box-sizing: border-box;
    margin: 14px auto;
    .content {
      align-items: center;
      justify-content: center;
      &-icon {
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }
    }
    & .content.selected, &:hover {
      color: #3E82F6;
    }
  }
  &-item + &-item {
    border-left: 1px dashed #FFD9D9D9;
  }

  .el-loading-spinner .el-loading-text {
    font-size: 12px;
  }
}
</style>
