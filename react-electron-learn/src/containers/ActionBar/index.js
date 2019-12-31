import React from "react";

import ActionBarItem from "./ActionBarItem";

import "./index.less";

function ActionBar() {
  return (
    <div className="action-bar-container">
      <div className="action-icons">
        <ActionBarItem type="minus" />
        <ActionBarItem type="fullscreen" />
        <ActionBarItem type="close" />
      </div>
    </div>
  );
}

export default ActionBar;
