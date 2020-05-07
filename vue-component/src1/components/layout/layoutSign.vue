<template>
  <div class="layout-sign">
    <div class="sign-logo">
      <sign-logo></sign-logo>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import signLogo from '../signLogo'
export default {
  name: 'layoutSign',
  components: {
    signLogo
  }
}
</script>

<style lang="scss">
.layout-sign {
  width: 100%;
  height: 100%;
  min-width: 1120px;
  min-height: 600px;
  background-image: url('../../assets/img/bg_sign.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  .sign-logo {
    position: absolute;
    left: 50px;
    top: 18px;
  }
}
</style>
