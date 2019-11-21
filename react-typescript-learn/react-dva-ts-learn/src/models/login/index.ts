import { Model } from 'dva';
import { routerRedux } from 'dva/router';

import { login } from './service';

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
      const { username, password } = payload;
      try {
        const res = yield call(login, { username, password });
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
      console.log('register');
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
