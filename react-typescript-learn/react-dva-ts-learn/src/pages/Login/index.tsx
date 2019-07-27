import * as React from "react";

import LoginForm from "../../containers/LoginForm";

import "./index.less";

export default class LoginPage extends React.Component {
  public render() {
    console.log("LoginPage :: ", this.props);
    return (
      <div className="login-page">
        <LoginForm />
      </div>
    );
  }
}
