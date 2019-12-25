// export default () => <div>Header</div>
import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { observer } from "mobx-react";

import useScrollMounting from "../../hooks/useScrollMounting";
import { navBarConfig } from "./navbar.config";

import "./index.less";

function Header() {
  const isShowMounting = useScrollMounting();
  return (
    <header
      className={classNames("header-container", {
        shadow: isShowMounting
      })}
    >
      <div className="header-wrapper">
        <ul>
          {navBarConfig.map(item => {
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
    </header>
  );
}

export default Header;
