import ol from "openlayers";
import { DataSet } from 'mapv'
import "@supermap/iclient-openlayers";

function initCellular(map, list, visible) {
  // 构造数据
  var data = [];
  list = list.data
  list.forEach(val => {
    data.push({
      geometry: {
        type: "Point",
        coordinates: ol.proj.transform(
          [+val.gdxzb, +val.gdyzb],
          "EPSG:4326",
          "EPSG:3857"
        )
      }
    });
  })
  var dataSet = new DataSet(data);
  //参数设置
  var mapvOptions = {
    shadowColor: 'rgba(255, 250, 50, 1)',
    shadowBlur: 10,
    fillStyle: 'rgba(255, 50, 0, 1.0)', // 非聚合点的颜色
    size: 5, // 非聚合点的半径
    minSize: 8, // 聚合点最小半径
    maxSize: 31, // 聚合点最大半径
    globalAlpha: 0.8, // 透明度
    clusterRadius: 150, // 聚合像素半径
    methods: {
      click: function (item) {
        console.log(item);  // 点击事件
      }
    },
    maxZoom: 19, // 最大显示级别
    label: { // 聚合文本样式
      show: true, // 是否显示
      fillStyle: 'white',
      shadowColor: 'yellow',
      font: '20px Arial',
      shadowBlur: 10,
    },
    gradient: { 0: "blue", 0.5: 'yellow', 1.0: "rgb(255,0,0)" }, // 聚合图标渐变色
    draw: 'cluster'
  };
  var options = {
    map: map.map,
    dataSet: dataSet,
    mapvOptions: mapvOptions
  };
  var layers = new ol.layer.Image({
    source: new ol.source.Mapv(options)
  });
  layers.setVisible(visible);
  map.map.addLayer(layers);
  return layers
}

export default initCellular
