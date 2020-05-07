<template>
  <div class="g-draw-echarts">
    <div :id="target" style="width: 100%; height: 100%;"></div>
  </div>
</template>

<script>
import maps from './maps'
export default {
  name: 'gDrawEcharts',
  props: {
    target: {
      type: String,
      // validator: function (val) {
      //   return maps.echartsType.indexOf(val) !== -1
      // },
      required: true
    },
    data: {
      type: [ Object, Array ],
      required: true
    }
  },
  data () {
    return {
      echartsElem: null
    }
  },
  mounted () {
    this.init()
  },
  watch: {
    data (newVal) {
      // console.log(newVal)
      this.echartsElem.resize()
      this.echartsElem.setOption(maps.echartsOption[this.target](this.data))
    }
  },
  methods: {
    init () {
      if (!this.echartsElem) {
        this.echartsElem = this.$echarts.init(document.getElementById(this.target))
      }
      this.echartsElem.setOption(maps.echartsOption[this.target](this.data, this.echartsElem))
    }
  },
  destroyed () {
    this.echartsElem.dispose()
  }
}
</script>

<style lang="scss">
.g-draw-echarts {
  width: 100%;
  height: 100%;
}
</style>
