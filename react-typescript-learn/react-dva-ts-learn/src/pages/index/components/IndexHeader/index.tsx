import React, { FunctionComponent } from 'react';
import { Input, Layout, Avatar } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Dispatch } from 'redux';
import { AppState } from '../../../../typings';
import './index.less';

const { Header } = Layout;

interface IndexHeaderProps extends AppState {
}

const IndexHeader: FunctionComponent<IndexHeaderProps> = ({ isLogin }) => {
  return (
    <Header className="index-header-container">
      <div className="header-wrapper">
        <span className="logo">轻享</span>
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

            {isLogin ? (
              <li className="nav-item nav-auth">
                <Link to="/home">
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                </Link>
              </li>
            ) : (
              <li className="nav-item nav-auth">
                <Link to="/login" className="login">
                  登录
                </Link>
                <Link to="/register">注册</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </Header>
  );
};

export default connect(
  (state: AppState) => {
    return {
      isLogin: state.login.isLogin
    };
  },
  (dispatch: Dispatch) => ({
    updateMenuStore(record: object) {
      dispatch({ type: 'menu/updateMenuStore', payload: record });
    }
  })
)(IndexHeader);
