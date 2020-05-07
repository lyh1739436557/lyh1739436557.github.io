<template>
  <div class="layer-nav">
    <ul>
      <li
        v-for="item in menuList"
        :key="item.id"
        @click="clickLayer(item.id)"
        element-loading-spinner="el-icon-loading"
        v-loading="item.loading"
        element-loading-text="loading..."
      >
        <span>
          <img :src="item.isChoose ? item.chooseIconPath : item.iconPath" />
        </span>
        <span :class="item.isChoose ? 'active' : ''">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// 横向导航
export default {
  props: {
    menuList: {
      type: Array,
      required: true,
      default: []
    },
    single: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    // loading关闭
    // loadingDone(ids) {
    //   this.menuList = this.menuList.map(curr => {
    //     if (ids.indexOf(curr.id) !== -1) {
    //       return {
    //         ...curr,
    //         loading: false
    //       };
    //     } else {
    //       return curr;
    //     }
    //   });
    // },
    clickLayer(e) {
      this.$emit("clickLayer", e);
    }
  }
};
</script>

<style lang="scss" scope>
.layer-nav {
  width: 178px;
  height: 60px;
  background: #fff;
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    li {
      height: 58px;
      width: 100%;
      color: #8b9198;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      span {
        height: 28px;
        width: 80%;
        text-align: center;
        line-height: 28px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
      }
      span:nth-child(1) {
        height: 16px;
        width: 16px;
        border: 1px dashed #8b9198;
      }
      .active {
        color: #3e82f6;
      }
    }
    li:hover {
      color: #3e82f6;
    }
  }
}
.el-loading-spinner .el-loading-text {
  font-size: 12px;
}
</style>
