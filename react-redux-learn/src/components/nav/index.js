import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./index.less";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        <p className="nav-title">React Redux Learn</p>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/detail">Detail</Link>
          <Link to="/upload">Upload</Link>
        </div>
      </div>
    );
  }
}
