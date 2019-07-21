import * as React from "react";

export interface IConfig {
  title: string;
}

export const config = (options: IConfig) => <P extends object>(Component: React.ComponentType<P>) => {
  return class extends React.Component<P> {
    render() {
      return <Component {...(this.props as P)} {...(options as IConfig)} />;
    }
  };
};
