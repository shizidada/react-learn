import * as React from "react";

import "./index.scss";

export default class Loading extends React.Component {
  render() {
    return (
      <div className="loading-wrapper">
        <div className="loading-text">正在加载...</div>
      </div>
    );
  }
}
