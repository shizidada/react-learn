import { NAMESPACE } from "./constants";

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

export default {
  namespace: NAMESPACE,

  state: {
    count: 0
  },

  // 处理同步动作，用来算出最新的 State
  reducers: {
    add(state, _) {
      // const list = state.list;
      // const param = "current = " + Math.random() * 1000;
      // console.log("state ==> ", state);
      // list.push(param);
      return {
        count: state.count + 1
      };
    },
    updateData(state, { payload }) {
      // console.log("state ==> ", state, "payload ==> ", payload);
      return {
        ...state,
        ...payload
      };
    }
  },

  // 处理异步动作
  effects: {
    *addAsync(action, { put, call, select }) {
      let { count } = yield select(state => state[NAMESPACE]);
      yield sleep(1000);
      yield put({ type: "updateData", payload: { count: count + 1 } });

      // 可以根据 NAMESPACE 查找 state
      // yield select(state => state[NAMESPACE]);
      // 操作
      // yield put({ type: "updateData", payload: {} });
      // 发起请求
      // const res = yield call(() =>
      //   post("/api/v1/article?action=get_open_article", params)
      // );
    }
  },

  subscriptions: {
    // setup({ dispatch, history }) {
    //   return history.listen(({ hash }) => {});
    // }
  }
};

export * from "./selectors";
