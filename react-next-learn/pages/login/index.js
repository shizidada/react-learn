import React, { Component } from "react";
import dynamic from "next/dynamic";

import LoginForm from "./LoginForm";

const MarkedownView = dynamic(import("../../components/MarkedownView"), {
  ssr: false,
});

import "./index.less";

class LoginPage extends Component {
  render() {
    return (
      <div className="login-page-container">
        <div className="login-ad">
          <MarkedownView />
        </div>
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
