import { Model } from 'dva';
import { routerRedux } from 'dva/router';

export const NAMESPACE = 'global';

export interface GlobalModelType extends Model {
  state: GlobalModelState;
}

export interface GlobalModelState {

}

const GlobalModel: GlobalModelType = {
  namespace: NAMESPACE,
  state: {
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
      history.listen(({ pathname, search }): void => {
      });
    },
  },
};

export default GlobalModel;
