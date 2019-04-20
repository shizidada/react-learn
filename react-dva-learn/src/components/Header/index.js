import React, { Component } from "react";

import { Link } from "dva/router";

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/" replace>
          Home
        </Link>
        <Link to="/publish" replace>
          Publish
        </Link>
      </div>
    );
  }
}

export default Header;
