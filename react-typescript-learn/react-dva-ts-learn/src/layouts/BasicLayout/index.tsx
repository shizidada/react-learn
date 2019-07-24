import React, { Component } from "react";

interface BasicLayoutProps extends React.Props<BasicLayoutProps> {}
interface BasicLayoutState {}

class BasicLayout extends Component<BasicLayoutProps, BasicLayoutState> {
  public render() {
    return <div>{this.props.children}</div>;
  }
}

export default BasicLayout;
