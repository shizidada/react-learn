import React, { Component } from "react";
import dynamic from "next/dynamic";

const MarkedownView = dynamic(import("../../components/MarkedownView"), {
  ssr: false,
});

import "./index.less";

class ArticlePage extends Component {
  render() {
    return (
      <div className="login-page-container">
        <MarkedownView />
      </div>
    );
  }
}

export default ArticlePage;
