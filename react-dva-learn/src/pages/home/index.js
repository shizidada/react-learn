import React, { Component } from "react";

import HelloWorld from "../../components/HelloWorld";

export default class Home extends Component {
  componentDidMount() {
    console.log("Home componentDidMount :: ", this.props);
  }
  render() {
    return <HelloWorld />;
  }
}
