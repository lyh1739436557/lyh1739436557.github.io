<template>
  <div style="height:100%;width:100%;text-align:left;">
    <div id="basicMapbox">
      <slot />
    </div>
  </div>
</template>
<script>
import MapboxLanguage from "@mapbox/mapbox-gl-language";
import mapboxgl from "mapbox-gl";
import { DeckglLayer } from "@supermap/iclient-mapboxgl"

export default {
  props: {
    mapWidth: {
      type: String
    },
    mapHeight: {
      type: String
    }
  },
  data() {
    return {
      chart: null,
      options: null,
      map1: null,
      data: [
        [121.685, 31.2312],
        [121.685, 31.2312],
        [121.625, 31.2312],
        [121.625, 31.2312],
        [121.625, 31.2312],
        [121.625, 31.2312],
        [121.685, 31.2112],
        [121.645, 31.2012],
        [121.645, 31.2012],
        [121.645, 31.2012],
        [121.645, 31.2012],
        [121.645, 31.2012],
        [121.645, 31.2012],
        [121.645, 31.2012],
        [121.645, 31.2012],
        [121.645, 31.2012],
        [121.6451, 31.2012],
        [121.6451, 31.2012]
      ]
    };
  },
  mounted() {
    this.$nextTick(res => {
      this.init();
      this.addLayer();
    });
  },
  methods: {
    // 初始化
    init() {
      console.log(mapboxgl);
      mapboxgl.accessToken =
        "pk.eyJ1IjoieWFuZ2ppYW4iLCJhIjoiY2phaG1neno0MXFkNDMzbWhwNWw0bWM4aiJ9.CFmrh0LVWAbmVeed-Xr7wA";
      this.options = {
        mapbox: {
          center: [121.685, 31.2312],
          zoom: 12,
          pitch: 60,
          bearing: 0,
          style: "mapbox://styles/mapbox/dark-v9",
          boxHeight: 20,
          light: {
            main: {
              intensity: 1,
              shadow: true,
              shadowQuality: "high"
            },
            ambient: {
              intensity: 0.2
            }
          }
        },
        series: []
      };
      this.map1 = new mapboxgl.Map({
        container: "basicMapbox",
        ...this.options.mapbox
      });
    },
    addLayer() {
      var deckglLayer = new DeckglLayer("hexagon-layer", {
        data: this.data,
        props: {
          extruded: true, //是否拉伸要素，默认为 false；
          radius: 200, //六边形半径值，默认为 1000
          elevationScale: 4, //高程乘数
          coverage: 0.8,
          colorRange: [
            [1, 152, 189],
            [73, 227, 206],
            [216, 254, 181],
            [254, 237, 177],
            [254, 173, 84],
            [209, 55, 78]
          ],
          // lightSettings 光照配置参数，配置三维光照效果，
          lightSettings: {
            lightsPosition: [-122.5, 37.7, 3000, -122.2, 37.9, 3000], // 指定为`[x，y，z]`的光在平面阵列中的位置
            ambientRatio: 0.2, //光照的环境比例
            diffuseRatio: 0.5, //光的漫反射率
            specularRatio: 0.3, //光的镜面反射率
            lightsStrength: [1.0, 0.0, 2.0, 0.0], //平面阵列中指定为“[x，y]`的灯的强度。 长度应该是`2 x numberOfLights`
            numberOfLights: 4 //光照值
          }
          //如需了解其他配置详情，请查看 DeckglLayer api
          // onHover: function(feature) {
          //   if (!popup) {
          //     popup = new mapboxgl.Popup({
          //       anchor: "bottom",
          //       closeButton: false,
          //       offset: {
          //         bottom: [0, -10]
          //       }
          //     });
          //   }
          //   if (!feature.object) {
          //     popup.remove();
          //     return;
          //   }
          //   //+" "+feature.lngLat
          //   popup.setHTML("Point Count： " + feature.object.points.length);
          //   popup.setLngLat(map.unproject([feature.x, feature.y]));
          //   popup.addTo(map);
          // }
        },
        callback: {
          getPosition: d => d
        }
      });
      this.map1.addLayer(deckglLayer);
    }
  }
};
</script>
<style>
#basicMapbox {
  height: 1000px;
  width: 1000px;
}
/* @import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css"); */
</style>