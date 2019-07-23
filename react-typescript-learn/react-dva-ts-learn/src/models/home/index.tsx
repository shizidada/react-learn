import { NAMESPACE } from "./constants";

export default {
  namespace: NAMESPACE,

  state: {
    name: "TypeScript from dva",
    count: 0
  },

  reducers: {
    add(state, action) {
      return { ...state, count: state.count + 1 };
    },
    minus(state, action) {
      return { ...state, count: state.count - 1 };
    },
  },
  effects: {
    *addWithDelay(action, { call, put }) {
      yield put({ type: "add" });
    },
    *redirect(action, { put }) {

    },
  },
};

export * from "./selectors";