import { Model } from 'dva';
import { routerRedux } from 'dva/router';
import { MD5 } from '../../util/MD5Util';
import { register } from './service';



// import { AppState } from "../../typings";

export const NAMESPACE = 'login';

const delay = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout));

export interface LoginModelType extends Model {
  state: LoginModelState;
}

export interface LoginModelState {
  loginType: string;
  isLoading: boolean;
  errorMessage: string;
}

const LoginModel: LoginModelType = {
  namespace: NAMESPACE,

  state: {
    loginType: 'login', // login registe reset
    isLoading: false,
    errorMessage: ''
  },

  reducers: {
    // change model data
    updateLoginStore(state, { payload }) {
      return { ...state, ...payload };
    }
  },

  effects: {
    *login(action, { call, put }) {
      yield put({ type: 'updateLoginStore', payload: { errorMessage: '', isLoading: true } });
      const { payload } = action;
      // yield call(delay, 500);
      // let state: LoginModelState = yield select((state: AppState) => state[NAMESPACE]);
      const { accountName } = payload;
      let { password } = payload;
      // password = MD5(password);
      try {
        if (accountName === 'admin' && password === 'admin') {
          yield call(delay, 1000);
          yield put(routerRedux.replace('/home'));
          yield put({ type: 'updateLoginStore', payload: { isLoading: false } });
        }else {
          // login failed
          yield put({
            type: 'updateLoginStore',
            payload: { errorMessage: '账号或密码错误', isLoading: false }
          });
        }
        // const data = yield call(login, { accountName, password });
        // console.log('login data :: ', data);
        // if (data.status) {
        //   yield put(routerRedux.replace('/'));
        //   yield put({ type: 'updateLoginStore', payload: { isLoading: false } });
        // } else {
        //   // login failed
        //   yield put({
        //     type: 'updateLoginStore',
        //     payload: { errorMessage: data.message, isLoading: false }
        //   });
        // }
      } catch (error) {
        yield put({
          type: 'updateLoginStore',
          payload: { errorMessage: error.message, isLoading: false }
        });
      }
    },

    *register(action, { call, put }) {
      yield put({ type: 'updateLoginStore', payload: { errorMessage: '', isLoading: true } });
      try {
        console.log('register', action);
        const { payload } = action;
        const { phone, verifyCode, smsToken } = payload;
        let { password, repassword: rePassword } = payload;
        password = MD5(password);
        rePassword = MD5(rePassword);
        const res = yield call(register, { phone, verifyCode, smsToken, password, rePassword });
        yield put({ type: 'updateLoginStore', payload: { errorMessage: '', isLoading: false } });
        console.log('register res :: ', res, action);
      } catch (error) {
        yield put({
          type: 'updateLoginStore',
          payload: { errorMessage: error.message, isLoading: false }
        });
      }
    }
  }

  // subscriptions: {
  //   setup({ history }): void {
  //     history.listen(({ pathname, search }): void => { });
  //   },
  // },
};

export default LoginModel;
