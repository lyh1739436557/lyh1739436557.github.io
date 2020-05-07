import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import Icon from "ol/style/Icon";
import Style from "ol/style/Style";
import icon from '../../../assets/img/police.png'
import { transform } from 'ol/proj'
import ol from 'openlayers'

// 初始化地图图层
function initCameraLayer(layer, data) {
  return new Promise(res => {
    var list = data.data;
    let coor = [121.48466, 31.22071];
    let vectorSource = layer.getSource();
    vectorSource.clear();
    list.forEach((val) => {
      coor = ol.proj.transform([+val.gdxzb, +val.gdyzb], 'EPSG:4326', 'EPSG:3857');
      var feature = new ol.Feature({
        geometry: new ol.geom.Point(coor)
      });
      feature.setStyle(
        new ol.style.Style({
          zIndex: 9999,
          image: new ol.style.Icon({
            //size: [200, 200],
            scale: 0.1,
            src: icon
          })
        })
      );
      // var content = [
      //   {
      //     name: 'abdc',
      //     value: '123123'
      //   }
      // ];
      // feature.markerType = "heatLayer";
      // feature.attr = { coor, content };
      vectorSource.addFeature(feature);
    });
    res();
  })
}

export default initCameraLayer
