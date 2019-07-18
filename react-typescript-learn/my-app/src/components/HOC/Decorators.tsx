import React, { Component } from "react";

import "./test/Decorators.test";

const logger = (options: object) => <P extends object>(Component: React.ComponentType<P>) =>
  class Logger extends React.Component<P> {
    componentDidMount() {
      console.log("Logger:: ", options, this.props);
    }
    render() {
      return <Component {...(this.props as P)} />;
    }
  };

interface IProps {
  decorator: string;
}

@logger({
  ajax: true,
})
export default class Decorators extends Component<IProps, {}> {
  componentDidMount() {
    console.log("Decorators componentDidMount :: ", this.props);
  }

  render() {
    return (
      <div>
        Decorators
        {/* <Link to={{ pathname: "javascript:void(0)" }}> jump </Link> */}
        {/* <a href="javascript:void(0)"> jump:void(0) </a> */}
      </div>
    );
  }
}
