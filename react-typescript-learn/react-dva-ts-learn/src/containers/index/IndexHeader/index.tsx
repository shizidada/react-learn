import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Layout, Input } from 'antd';

// eslint-disable-next-line import/extensions
import { AppState } from '../../../typings';

import './index.less';

const { Header } = Layout;

interface IndexHeaderProps extends AppState {
  onSliderMenuToggle: () => void;
  updateMenuStore: (collapsed?: object) => void;
}

const IndexHeader: FunctionComponent<IndexHeaderProps> = ({ updateMenuStore, collapsed }) => {
  return (
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
  );
};

export default connect(
  (state: AppState) => {
    return {
      ...state.menu,
    };
  },
  (dispatch: Dispatch) => ({
    updateMenuStore(record: object) {
      dispatch({ type: 'menu/updateMenuStore', payload: record });
    },
  }),
)(IndexHeader);
