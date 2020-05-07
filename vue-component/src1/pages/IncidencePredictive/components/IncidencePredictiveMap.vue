<template>
  <div class="l-incidence-predivtive-map">
    <div id="web-map-incidence-predivtive-map" v-show="openlayerMap"></div>
    <div id="mapbox-container" v-show="!openlayerMap">
      <slot />
    </div>
  </div>
</template>

<script>
import WebMap from "@/assets/js/webMap";
import InitGridLayer from "../../../assets/js/gridlayer";
import InitCellularLayer from "../../../assets/js/cellularlayer";
import mapboxgl from "mapbox-gl";
import { DeckglLayer } from "@supermap/iclient-mapboxgl"

export default {
  name: "lIncidencePredivtiveMap",
  data() {
    return {
      map1: null,
      options: null,
      data: [
        [121.685, 31.2312],
        [121.625, 31.2312],
        [121.685, 31.2112],
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
    // this.initMap();
    this.initMapboxMap();
  },
  data() {
    return {
      map: null,
      polygonLayer: null,
      layerList: new Array(4),
      mapShowLayer: 1, // 地图显示的图层
      openlayerMap: false //false时关闭二维地图，开启mapbox
    };
  },
  methods: {
    initMap() {
      this.map = new WebMap({
        target: "web-map-incidence-predivtive-map"
      });
    },
    // 蜂巢聚合
    initCellularLayer() {
      var layers = InitCellularLayer(
        this.map,
        this.$store.state.incidencePredictive.polygonLayer,
        this.mapShowLayer == 2
      );
      this.layerList[2] = layers;
    },
    // 网格聚合
    initGridLayer() {
      var layers = InitGridLayer(
        this.map,
        this.$store.state.incidencePredictive.polygonLayer,
        this.mapShowLayer == 1
      );
      this.layerList[1] = layers;
    },
    removeAllLayer() {
      this.layerList.map(val => {
        val && this.map.map.removeLayer(val);
      });
    },
    showLayer() {
      switch (this.$store.state.incidencePredictive.chooseLayer) {
        case "1":
          this.mapShowLayer = 1;
          break;
        case "2":
          this.mapShowLayer = 2;
          break;
        default:
          this.mapShowLayer = 1;
      }
    },
    initMapbox() {
      this.openlayerMap = false;
      this.initMapboxMap();
      this.addMapboxLayer();
    },
    initBaseLayer() {
      this.showLayer();
      this.removeAllLayer();
      this.initCellularLayer();
      this.initGridLayer();
    },
    initLayer() {
      this.openlayerMap = true;
      this.layerList.map(val => {
        val.setVisible(false);
      });
      this.chooseLayer != undefined &&
        this.layerList[+this.chooseLayer] &&
        this.layerList[+this.chooseLayer].setVisible(true);
    },
    // 初始化mapbox
    initMapboxMap() {
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
        container: "mapbox-container",
        ...this.options.mapbox
      });
    },
    addMapboxLayer() {
      let _self = this;
       this.map1.on('load', function () {
         var deckglLayer = new DeckglLayer("hexagon-layer", {
           data: _self.data,
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
         _self.map1.addLayer(deckglLayer);

       })
    }
    // 正方形区域划分
    // initPolygon() {
    //   let layer = new Layer();
    //   this.map.map.addLayer(layer);
    //   this.polygonLayer = new PolygonLayer(layer, this.layerData);
    // }
  },
  computed: {
    layerData() {
      return this.$store.state.incidencePredictive.polygonLayer;
    },
    chooseLayer() {
      return this.$store.state.incidencePredictive.chooseLayer;
    }
  },
  watch: {
    chooseLayer: {
      handler() {
        if (this.chooseLayer == 3) {
          this.initMapbox();
        } else {
          this.initLayer();
        }
      }
    },
    layerData: {
      handler() {
        this.initBaseLayer();
      },
      deep: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initMap();
    });
  }
};
</script>

<style lang="scss">
.l-incidence-predivtive-map {
  width: 100%;
  height: 100%;
}
#web-map-incidence-predivtive-map {
  width: 100%;
  height: 100%;
}
#mapbox-container {
  width: 600px;
  height: 600px;
}

</style>
