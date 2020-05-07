import { action, observable } from 'mobx';
import _ from 'lodash';

class MapStore {
    @observable view = {}
    @observable map = null

    @action initData() {
      this.view = {
        projection: "EPSG:4326",
        center: [121.489123, 31.238329],
        zoom: 14
      }
    }
  
    @action setData(path, newValue) {
      if (Object.prototype.toString.call(_.result(this.data, path)) !== '[object, Object]') {
        _.set(this.data, path, newValue);
      } else {
        _.set(this.data, path, {
          ..._.result(this.data, path),
          ...newValue
        })
      }
    }
}
export default new MapStore()