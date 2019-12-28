import React from "react";
import { Link } from "react-router-dom";

import { Button } from "antd";

import "./index.less";

const { remote, ipcRenderer } = window.require("electron");

function App() {
  const send = () => {
    ipcRenderer.send("auth-fail", { key: 100, name: "jj" });
  };

  const showDialog = () => {
    remote.dialog.showMessageBox({
      type: "info",
      title: "title",
      message: "message"
    });
  };

  return (
    <div className="app-page-container">
      <Button onClick={send}>send event</Button>
      <Button onClick={showDialog}>showDialog</Button>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img className="app-image" src={require("../../images/ca.png")} />
    </div>
  );
}

export default App;
