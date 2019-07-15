import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { increment, decrement } from "../store/counter/actions";
import { CounterAction } from "../store/counter/types";
import { AppState } from "../store";

interface IProps {}

interface IState {}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return <div>App</div>;
  }
}

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
)(App);
