import { Model } from 'dva';
import { routerRedux } from 'dva/router';

import { NAMESPACE } from './constants';

export interface GlobalModelType extends Model {
  state: GlobalModelState;
}

export interface GlobalModelState {}

const GlobalModel: GlobalModelType = {
  namespace: NAMESPACE,
  state: {},
  reducers: {},

  effects: {
    *redirect(action, { call, put, select }) {
      yield put(routerRedux.push('/login'));
    },
  },
  subscriptions: {
    setup({ history, dispatch }): void {
      history.listen(({ pathname, search }): void => {
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
