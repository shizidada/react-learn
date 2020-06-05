import { Dispatch } from "redux";
import { connect } from "react-redux";
import { increment, decrement } from "../store/counter/actions";
import { CounterAction } from "../store/counter/types";
import { AppState } from "../store";

import Counter from "../components/Counter";

const mapStateToProps = ({ counter }: AppState) => {
  return { ...counter };
};

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
