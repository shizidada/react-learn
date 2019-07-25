import React, { Component } from "react";

// interface UserLayoutProps {}

export default class UserLayout extends Component {
  public render() {
    return <div>{this.props.children}</div>;
  }
}
