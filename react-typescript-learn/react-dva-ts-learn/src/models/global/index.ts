import { Model } from 'dva';
import { routerRedux } from 'dva/router';

export const NAMESPACE = 'global';

export interface GlobalModelType extends Model {
  state: GlobalModelState;
}

export interface GlobalModelState {
  // SliderMenu selected key
  selectedKeys: string[];
  // SliderMenu selected open key
  openKeys: string[];
  // global cache route when close brower or tab
  cacheRouters?: object[];

  collapsed: boolean;
}

const GlobalModel: GlobalModelType = {
  namespace: NAMESPACE,
  state: {
    collapsed: false,
    selectedKeys: ['/'],
    openKeys: [],
    cacheRouters: [],
  },
  reducers: {
    updateGlobalStore(state, { payload }) {
      console.log('MooseGlobalHeader :: ', payload);
      return { ...state, ...payload };
    },
  },

  effects: {
    *redirect(action, { call, put, select }) {
      yield put(routerRedux.push('/login'));
    },
    *setCacheRouters(action, { call, put, select }) {
      const cacheRouters: object = [];
      yield put({
        type: 'updateGlobalStore',
        payload: {
          cacheRouters,
        },
      });
    },
  },
  subscriptions: {
    setup({ history, dispatch }): void {
      history.listen(({ pathname, search }): void => {
        dispatch({
          type: 'updateGlobalStore',
          payload: {
            selectedKeys: [pathname],
          },
        });
      });
    },
  },
};

export default GlobalModel;
