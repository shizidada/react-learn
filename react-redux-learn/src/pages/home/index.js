import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  increase = () => {
    this.props.increase();
  };

  render() {
    return (
      <div>
        <p>Home Page</p>
        <button onClick={this.increase}>{this.props.count} increase</button>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log("mapStateToProps ===> ",state, ownProps);
  return {
    count: state.count.count
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increase: () => {
      dispatch({
        type: "increase",
        payload: "加"
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
