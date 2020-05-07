import { action, observable } from 'mobx';
import _ from 'lodash';

class AppStore {
  data = observable({});
    
  initData() {
    this.data = {
      appNumber: 0
    }
  }

  setData(path, newValue) {
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
decorate(AppStore, {
    initData: action,
    setData: action
  })
export default new AppStore()