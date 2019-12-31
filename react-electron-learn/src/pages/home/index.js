import React from "react";
import { Redirect } from "react-router-dom";

import { Button } from "antd";

import "./index.less";

const { remote, ipcRenderer } = window.require("electron");
const Store = window.require("electron-store");
const loginStore = new Store({ configName: "Login" });

function Home() {
  let isLogin = loginStore.get("isLogin");
  if (!isLogin) {
    return <Redirect to="/login" />;
  }

  const send = () => {
    ipcRenderer.send("moose-auth-fail", { key: 100, name: "jj" });
  };

  const showDialog = () => {
    remote.dialog.showMessageBox({
      type: "info",
      title: "title",
      message: "message"
    });
  };

  return (
    <div className="home-page-container">
      <Button onClick={send}>send event</Button>
      <Button onClick={showDialog}>showDialog</Button>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img className="home-image" src={require("../../images/ca.png")} />
      <div>
        <pre>{JSON.stringify(window.process.versions, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Home;
