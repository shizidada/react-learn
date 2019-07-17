import React, { Component } from "react";

const logger = (options: object, ) => <P extends object>(Component: React.ComponentType<P>) =>
  class Logger extends React.Component<P> {
    componentDidMount() {
      console.log(`${Logger.name} props %s options %s`, JSON.stringify(this.props), JSON.stringify(options));
    }
    render() {
      return <Component {...(this.props as P)} />;
    }
  };

interface IProps {
  decorator: string;
}

@logger({
  name:  "jiangjing",
  age: 18
})
export default class Decorators extends Component<IProps, {}> {
  componentDidMount() {
    console.log("Logger componentDidMount :: ", this.props);
  }

  render() {
    return <div>Decorators</div>;
  }
}
