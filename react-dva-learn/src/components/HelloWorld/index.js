import React, { Component } from "react";
import { connect } from "dva";

import { getIndexState } from "../../models/index";
import { NAMESPACE } from "../../models/index/constants";

const mapStateToProps = state => getIndexState(state);
const mapDispatchToProps = dispatch => ({
  add() {
    dispatch({ type: `${NAMESPACE}/add` });
  },
  addAsync() {
    dispatch({ type: `${NAMESPACE}/addAsync` });
  },
  fetch() {
    dispatch({ type: `${NAMESPACE}/fetch` });
  }
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class HelloWorld extends Component {
  componentDidMount() {
    this.props.fetch();
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
    // console.log("HelloWorld render ==>", this.props);
    const { count, lists, title } = this.props;
    return (
      <div className="hello-world" id="hello-world">
        <p className="title">HelloWorld</p>
        <button className="aaa sync-add bbb" onClick={this.add}>
          +
        </button>
        <span>{count}</span>
        <button id="async-add" onClick={this.addAsync}>
          + async
        </button>
        <div id="hello-wrapper" className="hello-wrapper">
          {lists.length}
        </div>
        <div>{title}</div>
      </div>
    );
  }
}
