<template>
  <div class="g-drawer-left">
    <div class="box flex-col" ref="drawer-left">
      <el-tooltip effect="dark" :content="boxControlContent" placement="right">
        <div class="box-control inline-center pointer select-none" @click="handleClickBoxControl">
          <i :class="show ? 'el-icon-caret-left' : 'el-icon-caret-right'"></i>
        </div>
      </el-tooltip>
      <div class="box-title flex-shrink">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="box-body flex-1">
        <slot name="default"></slot>
      </div>
      <div class="box-footer flex-shrink" v-if="$slots.footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gDrawerLeft',
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      show: true
      // boxControlContent: '收起左侧面板'
    }
  },
  computed: {
    boxControlContent () {
      if (this.show) {
        return '收起左侧面板'
      } else {
        return '展开左侧面板'
      }
    }
  },
  methods: {
    handleClickBoxControl () {
      if (this.show) {
        this.show = false
        this.closeBox()
      } else {
        this.show = true
        this.openBox()
      }
    },
    openBox () {
      this.$refs['drawer-left'].style.left = 0
    },
    closeBox () {
      this.$refs['drawer-left'].style.left = '-' + window.getComputedStyle(this.$refs['drawer-left']).width
    }
  }
}
</script>

<style lang="scss">
.g-drawer-left {
  position: relative;
  .box {
    box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.2);
    width: 45%;
    height: calc(100% - 96px);
    min-width: 880px;
    min-height: 680px;
    background-color: #ebeef0;
    position: fixed;
    top: 80px;
    left: 0;
    z-index: 100;
    transition: all .4s;
    &-control {
      width: 40px;
      height: 48px;
      line-height: 48px;
      background: rgba(255,255,255,.9);
      box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.2);
      border-radius: 0px 8px 8px 0px;
      position: absolute;
      right: -40px;
      top: 0;
      transition: all .3s;
    }
    &-title {
      height: 48px;
      line-height: 48px;
      padding: 0 12px;
      background-color: #ffffff;
    }
    &-body {
      margin: 8px 0;
      padding: 0 12px;
      border-radius:0px 0px 4px 0px;
      overflow: auto;
    }
    &-footer {
      max-height: 40px;
      background-color: #fff;
      padding: 4px 12px;
    }
  }
}
</style>
