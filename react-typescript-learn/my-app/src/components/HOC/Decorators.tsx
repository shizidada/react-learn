import React, { Component } from "react";

import "./test/typescript.test";

interface HOCConfig {
  ajax: boolean;
}

const config = (options: HOCConfig) => <P extends object>(Component: React.ComponentType<P>) => {
  const { ajax } = options;

  if (ajax) {
    console.log("the config options :: ", options);
  };

  // const hocs = {};
  
  // @hocs
  class HOCComponent extends React.Component<P> {
    componentDidMount() {
      // console.log("HOCComponent:: ", options, this.props);
    }
    render() {
      return <Component {...(this.props as P)} />;
    }
  }
  return HOCComponent;
};

interface IProps {
  decorator: string;
}

@config({
  ajax: true,
})
export default class Decorators extends Component<IProps, {}> {
  componentDidMount() {
    // console.log("Decorators componentDidMount :: ", this.props);
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
