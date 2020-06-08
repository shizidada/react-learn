import * as React from 'react';
import { History } from 'history';

interface HOCConfig {
  permission: boolean;
}

interface HOCProps {
  history: History;
}

export const HOCConfig = (options: HOCConfig) => <P extends HOCProps>(Component: React.ComponentType<P>) => {
  return class extends React.Component<P> {
    public componentDidMount() {
      const { permission } = options;
      if (permission) {
        // TODO:
        console.log('hoc checking auth ...', this.props);
        const token = localStorage.getItem('token');
        if (token === null) {
          // TODO:
          console.log('go to login');
          this.props.history.replace('/login');
        }
      }
    }

    public render() {
      return <Component {...this.props} {...options} />;
    }
  };
};
