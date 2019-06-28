import { Dispatch } from "redux";
import { connect } from "react-redux";
import { increment, decrement } from "../store/counter/actions";
import { CounterAction } from "../store/counter/types";
import { AppState } from "../store";

import Hello from "../components/Counter";

function mapStateToProps({ counterReducer }: AppState) {
  return { ...counterReducer };
}

function mapDispatchToProps(dispatch: Dispatch<CounterAction>) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
