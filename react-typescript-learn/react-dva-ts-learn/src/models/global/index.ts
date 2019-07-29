import { Model } from 'dva';
import { routerRedux } from 'dva/router';

import { NAMESPACE } from './constants';

export * from './selectors';

export interface GlobalModelType extends Model {
  state: GlobalModelState;
}

export interface GlobalModelState {
  currentTab: string;
}

const GlobalModel: GlobalModelType = {
  namespace: NAMESPACE,
  state: {
    currentTab: 'user',
  },
  reducers: {
    updateGlobalData(state, { payload }) {
      console.log('updateGlobalData :: ', payload);
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
        dispatch({
          type: 'updateGlobalData',
          payload: {
            // currentTab: 'user',
            currentTab: pathname,
          },
        });
        console.log('GlobalModel : ', { pathname, search });
        // const isLogin = localStorage.getItem("ISLOGIN");
        // if (pathname === "/" && isLogin === null) {
        //   routerRedux.push("/login");
        // }
        // console.log(isLogin, typeof isLogin);
        // window.location.reload();
      });
    },
  },
};

export default GlobalModel;
