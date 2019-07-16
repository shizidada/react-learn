import * as React from "react";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

interface IProps {}

interface IState {
  ready: boolean;
}

export default class Counter extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      ready: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ready: true,
      });
    }, 500);
  }

  render() {
    console.log("Counter :: ", this.props);
    return (
      <div>
        <ReactPlaceholder
          rows={70}
          ready={this.state.ready}
          showLoadingAnimation={true}
          delay={1000}
          color="#eff9fa"
        >
          <span>Counter</span>
          <span>Counter</span>
          <span>Counter</span>
          <span>Counter</span>
        </ReactPlaceholder>
      </div>
    );
  }
}
