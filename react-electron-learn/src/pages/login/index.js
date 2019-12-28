import React from "react";

import LoginFrom from '../../components/login/LoginFrom'

import "./index.less";

function Login() {
  return <div className="login-page-container">
    {/* eslint-disable-next-line jsx-a11y/alt-text */}
    <img className="login-logo" src={require("../../images/ca.png")} />


    <LoginFrom />
  </div>;
}

export default Login;
