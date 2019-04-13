// export default () => <div>Header</div>
import React, { Component } from 'react';
import Link from "next/link";

class Header extends Component {

  render() {
    return (
      <div className="header-container">
        <Link href="/"><a>首页</a></Link>
        <Link href={{ pathname: "/about", query: { name: "JiangJing 9" } }}><a>关于</a></Link>
      </div>
    )
  }
}

export default Header;