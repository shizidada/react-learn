import * as React from "react";

import LoginForm from "../../containers/LoginForm";

import "./index.less";

export default class LoginPage extends React.Component {
  public render() {
    return (
      <div className="login-page">
        <div className="login-form">
          <LoginForm />
        </div>
      </div>
    );
  }
}
