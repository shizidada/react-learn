import React from "react";
import { connect } from "dva";

const mapStateToProps = state => state.count;

@connect(mapStateToProps)
export default class Count extends React.Component {
  add = () => {
    this.props.dispatch({ type: "count/add" });
  };

  minus = () => {
    this.props.dispatch({ type: "count/minus" });
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button key="add" onClick={this.add}>
          +
        </button>
        <button key="minus" onClick={this.minus}>
          -
        </button>
      </div>
    );
  }
}
