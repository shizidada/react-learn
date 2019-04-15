import { NAMESPACE } from "./constants";

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

export default {
  namespace: NAMESPACE,

  state: {
    count: 0,
    lists: [],
    title: ""
  },

  // 处理同步动作，用来算出最新的 State
  reducers: {
    add(state, _) {
      // const list = state.list;
      // const param = "current = " + Math.random() * 1000;
      // console.log("state ==> ", state);
      // list.push(param);
      return {
        ...state,
        count: state.count + 1
      };
    },
    updateData(state, { payload }) {
      // console.log("updateData :: ", state, " - ", payload);
      return {
        ...state,
        ...payload
      };
    }
  },

  // 处理异步动作
  effects: {
    *fetch(action, { put, call, select }) {
      let { lists } = yield select(state => state[NAMESPACE]);
      let json = yield call(() =>
        fetch("https://jsonplaceholder.typicode.com/todos/1")
      );
      let res = yield json.json();
      yield put({
        type: "updateData",
        payload: { title: res.title, lists: ["1", "2"] }
      });
    },
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
