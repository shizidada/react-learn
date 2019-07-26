import { Reducer } from "redux";
import { Subscription } from "dva";

import { Effect } from "../global";
import { NAMESPACE } from "./constants";

export * from "./selectors";

export interface LoginModelType {
  namespace: string;

  state: LoginModelState;

  reducers: {
    changeLoginType: Reducer<LoginModelState>;
  };

  effects: {
    login: Effect;
  };

  subscriptions: { setup: Subscription };
}

export interface LoginModelState {
  isLoginType: boolean;
}

const LoginModel: LoginModelType = {
  namespace: NAMESPACE,

  state: {
    isLoginType: true,
  },

  reducers: {
    changeLoginType(state, { payload }) {
      console.log(payload);
      const isLoginType = payload.isLoginType;
      return { ...state, isLoginType };
    },
  },

  effects: {
    *login(state, { call, put, select }) {},
  },

  subscriptions: {
    setup({ history }): void {
      history.listen(({ pathname, search }): void => {});
    },
  },
};

export default LoginModel;
