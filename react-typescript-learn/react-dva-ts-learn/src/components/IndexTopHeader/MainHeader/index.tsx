import React from 'react';

import './index.less'

import { titleConfig } from './mainConfig'

const MainHeader: React.FunctionComponent = () => {
  return <div className="index-main-header-container">
    <div className="wrapper">
      <h1 className="common-bg logo">&nbsp;</h1>

      <ul className="title-list">
        {titleConfig.map((item: string, index: number) => {
          // eslint-disable-next-line react/no-array-index-key
          return <li key={index}>
            <span>
              <a href="#">
                <em>{item}</em>
                <sub className="common-bg ">&nbsp;</sub>
              </a>
            </span>
          </li>
        })}
      </ul>

      <div className="search">
        <div className="common-bg search-bg">
          <span className="parent">
            <input type="text" placeholder="" style={{ opacity: 1 }} />
            <span>音乐/音频/电台/用户</span>
          </span>
        </div>
      </div>

      <div className="create-center">
        <span>创作中心</span>
      </div>

      <div className="login-text">
        <span>登录</span>
      </div>
    </div>
  </div>
};

export default MainHeader;
