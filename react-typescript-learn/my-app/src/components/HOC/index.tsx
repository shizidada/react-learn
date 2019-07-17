import * as React from "react";

import Decorators from "./Decorators";

//https://blog.csdn.net/weixin_34221775/article/details/91364192

// 声明一个 props interface，将会被添加到被包裹的组件上。
interface WithLoadingProps {
  loading: boolean;
}

// P表示传递到HOC的组件的props。
// React.ComponentType<P> 是 React.FunctionComponent<P> | React.ClassComponent<P>的别名，
// 表示传递到HOC的组件可以是类组件或者是函数组件。
const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoading extends React.Component<P & WithLoadingProps> {
    // displayName = `HOC(${this.getDisplayName(Component)})`;
    // private getDisplayName(WrapperComponent: React.ComponentType<P>): string {
    //   return WrapperComponent.displayName || WrapperComponent.name || "Component";
    // }
    componentDidMount() {
      console.log("WithLoading props :: ", this.props);
    }

    render() {
      const { loading, ...props } = this.props;
      return loading ? <div>Loading</div> : <Component {...(props as P)} />;
    }
  };

interface HocProps {
  name: string;
  loading: boolean;
}
interface HocState {}

@withLoading
export default class HOC extends React.Component<HocProps, HocState> {
  render() {
    return (
      <div>
        {this.props.name}
        <hr />
        <Decorators decorator="hi"></Decorators>
      </div>
    );
  }
}
