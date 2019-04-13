import * as stores from './stores';
import _ from 'lodash';
const initStore = (isServer) => {
  if (isServer) {
    let store = {};
    for (let i in stores) {
      store[_.camelCase(i)] = new (stores[i])();
    }
    return store;
  } else {
    let store = {};
    if (store === null) {
      for (let i in stores) {
        store[_.camelCase(i)] = new stores[i]();
      }
    }
    return store
  }
}
export default initStore;