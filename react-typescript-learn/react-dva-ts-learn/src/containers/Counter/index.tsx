import { connect } from "dva";
import * as constants from "../../models/counter/constants";
import { getCounterState } from "../../models/counter";
import Counter from "../../components/Counter";

const mapStateToProps = state => getCounterState(state);

const mapDispatchToProps = dispatch => ({
  add(record) {
    dispatch({ type: `${constants.NAMESPACE}/add`, payload: record });
  },
  minus(record) {
    dispatch({ type: `${constants.NAMESPACE}/minus`, payload: record });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);