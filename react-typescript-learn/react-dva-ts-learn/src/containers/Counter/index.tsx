import { Dispatch } from "redux";
import { connect } from "dva";

import { NAMESPACE } from "../../models/home/constants";
import { getCounterState } from "../../models/home";
import Counter from "../../components/Counter";

import { GlobalState } from "../../models/global";

const mapStateToProps = (state: GlobalState) => getCounterState(state);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  add(record) {
    dispatch({ type: `${NAMESPACE}/add`, payload: record });
  },
  minus(record) {
    dispatch({ type: `${NAMESPACE}/minus`, payload: record });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
