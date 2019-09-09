<template>
  <div id="basemap"></div>
</template>

<script>
import ol from "openlayers";
import { utilCityCenter, DataSet } from 'mapv'
import "@supermap/iclient-openlayers";
export default {
  data() {
    return {
      view: {
        projection: "EPSG:3857",
        center: ol.proj.transform(
          [121.48636, 31.208883],
          "EPSG:4326",
          "EPSG:3857"
        ),
        zoom: 3,
        maxZoom: 18,
        minZoom: 3
      },
      map: null
    };
  },
  methods: {
    createMap(target, views, index = 0) {
      return new Promise(res => {
        let layers = [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ];
        if (target && views) {
          this.map = new ol.Map({
            target: target,
            layers: layers,
            view: new ol.View(views)
          });
        } else {
          console.warn("create map error![1561]");
        }
      })
    },
    initCellular() {
      var randomCount = 300;
      var data = [];
      var citys = [
        "北京",
        "天津",
        "上海",
        "重庆",
        "石家庄",
        "太原",
        "呼和浩特",
        "哈尔滨",
        "长春",
        "沈阳",
        "济南",
        "南京",
        "合肥",
        "杭州",
        "南昌",
        "福州",
        "郑州",
        "武汉",
        "长沙",
        "广州",
        "南宁",
        "西安",
        "银川",
        "兰州",
        "西宁",
        "乌鲁木齐",
        "成都",
        "贵阳",
        "昆明",
        "拉萨",
        "海口"
      ];
      // 构造数据
      for (var i = 0; i < 300; i++) {
        var cityCenter = utilCityCenter.getCenterByCityName(
          citys[parseInt(Math.random() * citys.length)]
        );
        data.push({
          geometry: {
            type: "Point",
            coordinates: ol.proj.transform(
              [
                cityCenter.lng - 2 + Math.random() * 4,
                cityCenter.lat - 2 + Math.random() * 4
              ],
              "EPSG:4326",
              "EPSG:3857"
            )
          },
          count: 1
        });
      }
      var dataSet = new DataSet(data);
      //参数设置
      var mapvOptions = {
        fillStyle: "rgba(55, 50, 250, 0.8)",
        shadowColor: "rgba(255, 250, 50, 1)",
        shadowBlur: 20,
        max: 100,
        size: 50,
        label: {
          show: true,
          fillStyle: "white"
        },
        globalAlpha: 0.5,
        gradient: {
          0.25: "rgb(0,0,255)",
          0.55: "rgb(0,255,0)",
          0.85: "yellow",
          1.0: "rgb(255,0,0)"
        },
        draw: "honeycomb"
      };
      var options = {
        map: this.map,
        dataSet: dataSet,
        mapvOptions: mapvOptions
      };
      this.map.addLayer(
        new ol.layer.Image({
          source: new ol.source.Mapv(options)
        })
      );
    }
  },
  mounted() {
    this.createMap("basemap", this.view)
    .then(this.initCellular());
  }
};
</script>

<style lang="scss" scope>
#basemap {
  width: 100%;
  height: 100%;
}
</style>
