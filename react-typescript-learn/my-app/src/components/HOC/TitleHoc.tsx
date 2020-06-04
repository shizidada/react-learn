import * as React from "react";

export interface TitleHocConfig {
  title: string;
}

export const TitleHoc = (options: TitleHocConfig) => <P extends object>(
  Component: React.ComponentType<P>
) => {
  return class Hoc extends React.Component<P> {
    render() {
      return <Component {...(this.props as P)} {...(options as TitleHocConfig)} />;
    }
  };
};
