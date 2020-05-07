<template>
  <div class="l-alert-situation-analysis-map">
    <div id="web-map-alert-situation-analysis-map"></div>
  </div>
</template>

<script>
import WebMap from "@/assets/js/webMap";
import InitCellularLayer from "../../../assets/js/cellularlayer";
import InitGridLayer from "../../../assets/js/gridlayer";
import InitClusterLayer from "../../../assets/js/radiolayer";
import HeatLayer from "../../../assets/js/heatlayer";
import Mapheatlayer from "../layer/mapheatlayer";
import Layer from "../../../assets/js/layer";
import PointerLayer from "../layer/featurelayer";
import FinchLayer from "../../../assets/js/finchlayer";
import Mapaggregationlayer from "../layer/mapaggregationlayer";
import icon from "../../../assets/img/police.png";

/* eslint-disable no-new */
export default {
  name: "lAlertSituationAnalysisMap",
  data() {
    return {
      map: null,
      layerList: new Array(4),
      finchLayerList: new Array(3),
      mapShowLayer: 1 // 地图显示的图层
    };
  },
  methods: {
    initMap() {
      return new Promise(res => {
        this.map = new WebMap({
          target: "web-map-alert-situation-analysis-map"
        });
        res();
      });
    },
    initMapEvent() {
      //地图所有点击事件
      this.map.map.on(
        "singleclick",
        function(evt) {
          var feature = this.map.map.forEachFeatureAtPixel(
            evt.pixel,
            function(f) {
              return f;
            },
            { hitTolerance: 5 }
          ); // 获取点击的点，判断是否为撒点
        }.bind(this)
      );
    },
    // 蜂巢聚合
    initCellularLayer(data) {
      var layers = InitCellularLayer(
        this.map,
        this.$store.state.alertSituationAnalysis.layerData,
        this.mapShowLayer == 5
      );
      this.finchLayerList[2] = layers;
    },
    // 网格聚合
    initGridLayer(data) {
      var layers = InitGridLayer(
        this.map,
        this.$store.state.alertSituationAnalysis.layerData,
        this.mapShowLayer == 4
      );
      this.finchLayerList[1] = layers;
    },
    initHeatLayer(data) {
      const Layer1 = new Layer(this.mapShowLayer == 1);
      this.map.map.addLayer(Layer1);
      new PointerLayer(
        Layer1,
        this.$store.state.alertSituationAnalysis.layerData
      );
      this.layerList[0] = Layer1;
    },
    // 圆形聚合
    // initClusterLayer(data) {
    //   var layers = new InitClusterLayer(
    //     this.map,
    //     this.$store.state.alertSituationAnalysis.layerData,
    //     this.mapShowLayer == 3
    //   );
    //   this.finchLayerList[0] = layers;
    // },
    initClusterLayer(data) {
      var newLayer = new FinchLayer(this.mapShowLayer == 3, icon);
      this.map.map.addLayer(newLayer);
      var layers = new Mapaggregationlayer(
        newLayer,
        this.$store.state.alertSituationAnalysis.layerData,
      );
      this.finchLayerList[0] = newLayer;
    },
    initLayer() {
      if (this.chooseLayer == 3) {
        this.initFinchLayer();
        return;
      }
      this.layerList.map(val => {
        val.setVisible(false);
      });
      this.finchLayerList.map(val => {
        val.setVisible && val.setVisible(false);
      });
      this.layerList[+this.chooseLayer - 1] &&
        this.layerList[+this.chooseLayer - 1].setVisible(true);
    },
    initFinchLayer() {
      this.layerList.map(val => {
        val.setVisible && val.setVisible(false);
      });
      this.finchLayerList.map(val => {
        val.setVisible && val.setVisible(false);
      });
      !!this.finchLayerList[+this.chooseAggregationLayer] &&
        this.finchLayerList[+this.chooseAggregationLayer].setVisible(true);
    },
    removeAllLayer() {
      this.layerList.map(val => {
        val && this.map.map.removeLayer(val);
      });
      this.finchLayerList.map(val => {
        val && this.map.map.removeLayer(val);
      });
    },
    initBaseLayer() {
      this.showLayer();
      this.removeAllLayer();
      this.initCellularLayer();
      this.initGridLayer();
      this.initClusterLayer();
      this.initHeatLayer();
    },
    showLayer() {
      switch (this.$store.state.alertSituationAnalysis.chooseLayer) {
        case "1":
          this.mapShowLayer = 1;
          break;
        case "2":
          this.mapShowLayer = 2;
          break;
        case "3":
          this.showAggregationLayer()
          break;
        default:
          this.mapShowLayer = 1;
      }
    },
    showAggregationLayer() {
      switch (this.$store.state.alertSituationAnalysis.chooseAggregationLayer) {
        case "0":
          this.mapShowLayer = 3;
          break;
        case "1":
          this.mapShowLayer = 4;
          break;
        case "2":
          this.mapShowLayer = 5;
          break;
        default:
          this.mapShowLayer = 3;
      }
    }
  },
  computed: {
    chooseLayer() {
      return this.$store.state.alertSituationAnalysis.chooseLayer;
    },
    chooseAggregationLayer() {
      return this.$store.state.alertSituationAnalysis.chooseAggregationLayer;
    },
    layerData() {
      return this.$store.state.alertSituationAnalysis.layerData;
    }
  },
  watch: {
    chooseLayer: {
      handler() {
        this.initLayer();
      }
    },
    chooseAggregationLayer: {
      handler() {
        this.initFinchLayer();
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
    this.initMap().then(res => {
      this.initMapEvent();
    });
  }
};
</script>

<style lang="scss">
.l-alert-situation-analysis-map {
  width: 100%;
  height: 100%;
}
#web-map-alert-situation-analysis-map {
  width: 100%;
  height: 100%;
}
</style>
