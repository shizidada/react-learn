import { Model } from 'dva';
import { routerRedux } from 'dva/router';
import { SliderMenuConfig } from '../../typings';

export const NAMESPACE = 'global';

export interface GlobalModelType extends Model {
  state: GlobalModelState;
}

export interface GlobalModelState {
  globalTabs: SliderMenuConfig[];
  activeKey: string;
}

const GlobalModel: GlobalModelType = {
  namespace: NAMESPACE,
  state: {
    globalTabs: [
      {
        name: '首页',
        path: '/home',
        activeKey: 'home',
      },
    ],

    activeKey: 'home',
  },
  reducers: {
    updateGlobalStore(state, { payload }) {
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
