import { Reducer } from "redux";
import { Subscription } from "dva";

import { Effect } from "../global";
import { NAMESPACE } from "./constants";

export * from "./selectors";

export interface HomeModelState {
  name: string;
  count: number;
}

export interface HomeModelType {
  namespace: string;

  state: HomeModelState;

  effects: {
    addWithDelay: Effect;
    redirect: Effect;
  };

  reducers: {
    add: Reducer<HomeModelState>;
    minus: Reducer<HomeModelState>;
  };

  subscriptions: { setup: Subscription };
}

const HomeModel: HomeModelType = {
  namespace: NAMESPACE,

  state: {
    name: "TypeScript from dva",
    count: 0,
  },

  reducers: {
    add(state, action) {
      return { ...state, count: state.count + 1 };
    },
    minus(state, { payload }) {
      return { ...state, count: state.count - 1 };
    },
  },

  effects: {
    *addWithDelay({ payload }, { put, select }) {},
    *redirect(action, { put }) {},
  },

  subscriptions: {
    setup({ history }): void {
      history.listen(({ pathname, search }): void => {});
    },
  },
};

export default HomeModel;
