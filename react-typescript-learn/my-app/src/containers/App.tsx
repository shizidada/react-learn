import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { increment, decrement } from "../store/counter/actions";
import { CounterAction } from "../store/counter/types";
import { AppState } from "../store";

import "./App.scss";

interface IProps {}

interface IState {
  ready: boolean;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      ready: false,
    };
  }

  componentDidMount() {
    console.log(this.props);
    setTimeout(() => {
      this.setState({
        ready: true,
      });
    }, 3000);
  }

  setShowButton = (enter: boolean) => {
    this.setState({
    })
  }

  render() {
    return (
      <div>
          <ReactPlaceholder
            rows={70}
            ready={this.state.ready}
            showLoadingAnimation={true}
            delay={1000}
            style={{ width: 152 }}
            color="#eff9fa"
          >
            <span>ReactPlaceholder</span>
          </ReactPlaceholder>
      </div>
    );
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
