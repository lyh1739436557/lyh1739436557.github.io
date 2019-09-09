<template>
  <div>
    <router-link v-for="(item, index) in navList" :key="index" :to="path">{{ item.name }}</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {name: '主页', path: '/'},
        {name: '第一页', path: '/firstPage'},
        {name: '第二页', path: '/secondPage'},
      ]
    }
  },
}
</script>

<style lang="sass">
  
</style>
