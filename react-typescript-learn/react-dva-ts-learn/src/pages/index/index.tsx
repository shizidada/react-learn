import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Link } from 'dva/router';

import { Layout, Input } from 'antd';

import { ConnectState } from '../../typings';

import './lodash.test';

import './index.less';

const { Header, Content, Footer } = Layout;

interface IndexPageProps extends ConnectState {}

const IndexPage: FunctionComponent<IndexPageProps> = ({ home }) => {
  return (
    <div className="index-page-container">
      <Header className="header-container">
        <div className="header-wrapper">
          <span className="logo">FaS</span>
          <nav className="main-nav">
            <ul className="nav-list">
              <li className="nav-list">
                <ul className="title-list ">
                  <li className="nav-item">
                    <Link to="/index.html">首页</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">话题</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/activity">活动</Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item nav-search">
                <Input.Search />
              </li>

              <li className="nav-item nav-auth">
                <span className="login">登录</span>
                <span>注册</span>
              </li>
            </ul>
          </nav>
        </div>
      </Header>

      <Content className="content-container">
        <nav className="view-nav">
          <ul className="view-list">
            <li className="nav-item active">推荐</li>
            <li className="nav-item">阅读</li>
          </ul>
        </nav>

        <div className="main-content">
        main-content
        main-content
        main-content
        main-content
        </div>
      </Content>
    </div>
  );
};

export default connect(
  (state: ConnectState) => {
    return {
      home: state.home,
    };
  },
  (dispatch: Dispatch) => ({}),
)(IndexPage);
