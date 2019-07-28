import { Model } from "dva";
import { routerRedux } from "dva/router";

import { NAMESPACE } from "./constants";
// import { GlobalState } from "../../typings";
export * from "./selectors";

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
    errorMessage: "",
  },

  reducers: {
    // change model data
    updateData(state, { payload }) {
      return { ...state, ...payload };
    },
  },

  effects: {
    *login(action, { call, put, select }) {
      yield put({ type: "updateData", payload: { errorMessage: "", isLoading: true } });

      const { payload } = action;
      yield call(delay, 500);
      // let state: LoginModelState = yield select((state: GlobalState) => state[NAMESPACE]);
      const { username, password } = payload;
      if (username === "admin" && password === "123") {
        yield put(routerRedux.replace("/"));
      } else {
        // login failed
        yield put({
          type: "updateData",
          payload: { errorMessage: "账号或密码不正确。", isLoading: false },
        });
      }
    },
    *register(action, { call, put, select }) {
      console.log("register");
      yield "";
    },
    // *redirect(action, { call, put, select }) {
    //   yield put(routerRedux.push("/"));
    // },
  },

  subscriptions: {
    setup({ history }): void {
      history.listen(({ pathname, search }): void => {});
    },
  },
};

export default LoginModel;
