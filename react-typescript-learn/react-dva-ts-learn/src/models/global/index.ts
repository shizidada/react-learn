import { Model } from 'dva';
import { routerRedux } from 'dva/router';
import { SliderMenuConfig } from '../../typings';

export const NAMESPACE = 'global';

export interface GlobalModelType extends Model {
  state: GlobalModelState;
}

export interface GlobalModelState {
  globalTabs: SliderMenuConfig[];
}

const GlobalModel: GlobalModelType = {
  namespace: NAMESPACE,
  state: {
    globalTabs: [
      {
        type: '',
        activeKey: 'home',
        name: '首页',
        path: '/home',
      },
    ],
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
  },
  subscriptions: {
    setup({ history, dispatch }): void {
      history.listen(({ pathname, search }): void => {});
    },
  },
};

export default GlobalModel;
