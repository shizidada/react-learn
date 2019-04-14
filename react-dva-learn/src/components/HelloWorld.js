import React, { Component } from "react";
import { connect } from "dva";

import { getIndexState } from "../models/index";
import { NAMESPACE } from "../models/index/constants";

const mapStateToProps = state => getIndexState(state);
const mapDispatchToProps = dispatch => ({
  add() {
    dispatch({ type: `${NAMESPACE}/add` });
  },
  addAsync() {
    dispatch({ type: `${NAMESPACE}/addAsync` });
  }
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class HelloWorld extends Component {
  componentDidMount() {
    // console.log("componentDidMount ==>", this.props);
  }

  componentWillReceiveProps() {
    // console.log("componentWillReceiveProps ==>", this.props);
  }

  add = () => {
    this.props.add();
    // console.log(this.props);
    // this.forceUpdate(); // TODO
  };
  addAsync = () => {
    this.props.addAsync();
    // console.log(this.props);
    // this.forceUpdate(); // TODO
  };

  render() {
    const { count } = this.props;
    return (
      <div className="hello-world">
        <p className="title">HelloWorld</p>
        <button onClick={this.add}>+</button>
        <span>{count}</span>
        <button onClick={this.addAsync}>+ async</button>
        <div className="hello-wrapper">
          {/* {list.map((item, index) => {
            return <div key={index} />;
          })} */}
        </div>
      </div>
    );
  }
}
