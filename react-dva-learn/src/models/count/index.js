export default {
  namespace: "count",
  state: {
    count: 0
  },
  reducers: {
    add(state) {
      return {
        count: state.count + 1
      };
    },
    minus(state) {
      return {
        count: state.count - 1
      };
    }
  }
};
