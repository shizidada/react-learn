import React, { Component } from "react";

import LoginForm from "./LoginForm";

import "./index.less";

class LoginPage extends Component {
  render() {
    return (
      <div className="login-page-container">
        <div className="login-ad"></div>
        <div className="login-form">
          <div className="wrapper">
            <p>Login Page</p>
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
