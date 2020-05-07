<template>
  <div class="fy-component-main">
    123123
    <!-- <header>
      <nav class="fy-component-main-nav"></nav>
    </header>
    <article>
      <aside class="fy-component-main-menu"></aside>
      <section class="fy-component-main-container"></section>
    </article> -->
  </div>
</template>

<script>
import MainNav from "../components/MenuNav";
import RollNum from "../components/RollingNum";
export default {
  data() {
    return {
      single: true, //单复选
      navData: [ //导航数据
        {
          id: 0,
          name: "圆形",
          iconPath: "",
          isChoose: true,
          loading: false,
          chooseIconPath: ""
        },
        {
          id: 1,
          name: "网格",
          iconPath: "",
          loading: false,
          isChoose: false,
          chooseIconPath: ""
        },
        {
          id: 2,
          name: "蜂巢",
          iconPath: "",
          loading: false,
          isChoose: false,
          chooseIconPath: ""
        }
      ]
    };
  },
  components: {
    MainNav,
    RollNum
  },
  methods: {
    clickLayer(e, n) {
      if (e !== undefined && this.navData[e]) {
        if (this.single) {
          this.navData = this.navData.map((curr, i) => {
            return {
              ...curr,
              isChoose: curr.isChoose ? false : Boolean(i === e)
            };
          });
        } else {
          this.navData[e].isChoose = this.navData[e].isChoose ? false : true;
        }
        const selected = this.navData
          .filter(curr => curr.isChoose)
          .map(curr => curr.id);
        console.log(selected, "test");
      }
    }
  }
};
</script>

<style lang="scss">
.fy-component-main{
  width: 100%;
  height: 100%;
  min-width: 500px;
  font-size: 1rem;
  &-nav {
    width: 100%;
    height: 80px;
    background: rgba(54, 54, 54, 0.8);
  }
  article{
    width: 100%;
    height: calc(100vh - 80px);
    .fy-component-main-menu{
      height: 100%;
      width: 200px;
      background: rgba(54, 54, 54, 0.8);
    }
  }
}
</style>
