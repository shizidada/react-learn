import React, { useState } from "react";

import LoginFrom from '../../components/login/LoginFrom'

import "./index.less";

const { ipcRenderer } = window.require('electron');

function Login() {
  // send 关闭 app 
  const handleCloseApp = () => {
    ipcRenderer.send("moose-close-app")
  }

  return <div className="login-page-container">
    <span className="login-closed-icon" onClick={handleCloseApp}></span>
    {/* eslint-disable-next-line jsx-a11y/alt-text */}
    <img className="login-logo" src={require("../../images/ca.png")} />
    <LoginFrom />
  </div>;
}

export default Login;
