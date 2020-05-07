<template>
  <div class="layer-nav">
    <ul>
      <li v-for="item in nav" :key="item.id" @click="clickLayer(item.id)">
        <span>
          <img :src="item.isChoose ? item.chooseIconPath : item.iconPath" />
        </span>
        <span :class="item.isChoose ? 'active' : ''">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    nav: {
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
      msg: ''
    };
  },
  methods: {
    clickLayer(e) {
      this.$emit("clickLayer", e, this.single);
    }
  }
};
</script>

<style lang="scss" scope>
.layer-nav {
  height: 178px;
  width: 40px;
  background: #fff;
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-flow: column;
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
</style>
