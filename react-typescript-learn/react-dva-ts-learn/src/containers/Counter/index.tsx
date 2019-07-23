import { connect } from "dva";
import { NAMESPACE } from "../../models/home/constants";
import { getCounterState } from "../../models/home";
import Counter from "../../components/Counter";

const mapStateToProps = state => getCounterState(state);

const mapDispatchToProps = dispatch => ({
  add(record) {
    dispatch({ type: `${NAMESPACE}/add`, payload: record });
  },
  minus(record) {
    dispatch({ type: `${NAMESPACE}/minus`, payload: record });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);