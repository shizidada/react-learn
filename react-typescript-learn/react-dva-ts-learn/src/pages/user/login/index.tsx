import * as React from 'react';
import { Location } from 'history';

import LoginForm from '../../../containers/login/LoginForm';

import './index.less';

interface LoginPageProps {
  localtion: Location<{}>;
}

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <div className="login-page-container">
      <LoginForm />
    </div>
  );
};
export default LoginPage
