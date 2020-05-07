// import Map from 'ol/Map'
// import View from 'ol/View'
// import LayerTile from 'ol/layer/Tile'
// import SourceXYZ from 'ol/source/XYZ'
// import { transform } from 'ol/proj'
import ol from 'openlayers'

const NODE_ENV = process.env.NODE_ENV // development || production

export default class WebMap {
  constructor (props) {
    const { target = '', layers = {}, view = {} } = props
    this.map = null
    this.option = NODE_ENV === 'production' ? {
      layers: [
        // new LayerTile({
        new ol.layer.Tile({
          source: new ol.source.XYZ({
            // url: 'http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
            url: 'http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
          })
        }),
        new ol.layer.Tile({
          source: new ol.source.XYZ({
            url: 'http://15.75.0.255:25333/v3/tile?lid=traffic&get=map&cache=off&x={x}&y={y}&z={z}' // 浅色交通地图瓦片
          })
        }),
        new ol.layer.Tile({
          source: new ol.source.XYZ({
            url: 'http://15.75.0.255:25888/v3/tile?x={x}&y={y}&z={z}' // 浅色地图瓦片
          })
        }),
        ...layers
      ],
      view: new ol.View({
        center: ol.proj.transform([121.48636, 31.208883], 'EPSG:4326', 'EPSG:3857'),
        // center: [121.48636, 31.208883],
        projection: 'EPSG:3857',
        zoom: 14,
        // minZoom: 5,
        // maxZoom: 20,
        ...view
      }),
      target
    } : {
      layers: [
        new ol.layer.Tile({
          source: new ol.source.XYZ({
            url: 'http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
          })
        }),
        ...layers
      ],
      view: new ol.View({
        center: ol.proj.transform([121.48636, 31.208883], 'EPSG:4326', 'EPSG:3857'),
        // center: [121.46636, 31.208883],
        projection: 'EPSG:3857',
        zoom: 14,
        minZoom: 5,
        maxZoom: 20,
        ...view
      }),
      target
    }

    this.create()
  }

  create = function () {
    if (this.option) {
      this.map = new ol.Map(this.option)
    } else {
      console.warn('new WebMap must pass the parameter target!')
    }
  }
}
