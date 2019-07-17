import React, { Component } from "react";

const logger = <P extends object>(Component: React.ComponentType<P>) =>
  class Logger extends React.Component<P> {
    componentDidMount() {
      console.log(`${Logger.name} props`, this.props);
    }
    render() {
      return <Component {...(this.props as P)} />;
    }
  };

interface IProps {
  decorator: string;
}

@logger
export default class Decorators extends Component<IProps, {}> {
  componentDidMount() {
    console.log("Logger componentDidMount :: ", this.props);
  }

  render() {
    return <div>Decorators</div>;
  }
}
