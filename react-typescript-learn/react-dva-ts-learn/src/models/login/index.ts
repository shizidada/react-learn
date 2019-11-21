import { Model } from 'dva';
import { routerRedux } from 'dva/router';

import { MD5 } from '../../util/MD5Util';

import { login, register } from './service';

// import { ConnectState } from "../../typings";

export const NAMESPACE = 'login';

const delay = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout));

export interface LoginModelType extends Model {
  state: LoginModelState;
}

export interface LoginModelState {
  isLoginType: boolean;
  isLoading: boolean;
  errorMessage: string;
}

const LoginModel: LoginModelType = {
  namespace: NAMESPACE,

  state: {
    isLoginType: true,
    isLoading: false,
    errorMessage: '',
  },

  reducers: {
    // change model data
    updateLoginStore(state, { payload }) {
      return { ...state, ...payload };
    },
  },

  effects: {
    *login(action, { call, put, select }) {
      yield put({ type: 'updateLoginStore', payload: { errorMessage: '', isLoading: true } });
      const { payload } = action;
      // yield call(delay, 500);
      // let state: LoginModelState = yield select((state: ConnectState) => state[NAMESPACE]);
      const { accountName } = payload;
      let { password } = payload;
      password = MD5(password);
      try {
        const res = yield call(login, { accountName, password });
        console.log('res :: ', res);
        const { data } = res;
        if (data.status) {
          yield put(routerRedux.replace('/'));
          yield put({ type: 'updateLoginStore', payload: { isLoading: false } });
        } else {
          // login failed
          yield put({
            type: 'updateLoginStore',
            payload: { errorMessage: data.message, isLoading: false },
          });
        }
      } catch (error) {
        yield put({
          type: 'updateLoginStore',
          payload: { errorMessage: '系统繁忙', isLoading: false },
        });
      }
    },
    *register(action, { call, put, select }) {
      console.log('register', action);
      const { payload } = action;
      const { accountName } = payload;
      let { password, repassword: rePassword } = payload;
      password = MD5(password);
      rePassword = MD5(rePassword);
      const res = yield call(register, { accountName, password, rePassword });
      console.log(res);

      yield '';
    },
    // *redirect(action, { call, put, select }) {
    //   yield put(routerRedux.push("/"));
    // },
  },

  subscriptions: {
    setup({ history }): void {
      history.listen(({ pathname, search }): void => { });
    },
  },
};

export default LoginModel;
