import { Model } from "dva";

import { NAMESPACE } from "./constants";
export * from "./selectors";

const delay = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout));

export interface HomeModelType extends Model {
  state: HomeModelState;
}

export interface HomeModelState {
  name: string;
  count: number;
}

const HomeModel: HomeModelType = {
  namespace: NAMESPACE,

  state: {
    name: "TypeScript from dva",
    count: 0,
  },

  reducers: {
    add(state: HomeModelState, { payload }) {
      return { ...state, count: state.count + 1 };
    },
    minus(state: HomeModelState, { payload }) {
      return { ...state, count: state.count - 1 };
    },
  },

  effects: {
    *addWithDelay(action, { call, put, select }) {
      yield call(delay, 500);
      yield put({ type: "add" });
    },
  },

  subscriptions: {
    setup({ history }): void {
      history.listen(({ pathname, search }): void => {});
    },
  },
};

export default HomeModel;
