// export default () => <div>Header</div>
import React, { Component } from "react";
import Link from "next/link";

import "./index.less";

const navList = [
  {
    title: "Index",
    path: "/"
  },
  {
    title: "ImageCode",
    path: "/imageCode"
  },
  {
    title: "About",
    path: "/about"
  }
];

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <ul>
          {navList.map(item => {
            return (
              <li key={item.title}>
                <Link href={item.path}>
                  <a>{item.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Header;
