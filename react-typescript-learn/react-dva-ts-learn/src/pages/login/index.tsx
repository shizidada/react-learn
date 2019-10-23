import * as React from 'react';
import { Location } from 'history';

import LoginForm from '../../containers/LoginForm';

import './index.less';

interface LoginPageProps {
  localtion: Location<any>;
}

export default class LoginPage extends React.Component<LoginPageProps, {}> {
  public render() {
    console.log('LoginPage :: ', this.props);
    return (
      <div className="login-page">
        <LoginForm />
      </div>
    );
  }
}
