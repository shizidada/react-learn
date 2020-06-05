import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Layout, Row, Col, Card } from 'antd';

import { AppState } from '../../typings';

import IndexHeader from '../../containers/index/IndexHeader';
import SelectionRow from '../../containers/index/SelectionRow';

import ImportBrokenLine from '../../components/chart/ImportBrokenLine';

import './index.less';

import './lodash.test';
import MainContent from '../../containers/index/MainContent';

const { Content, Footer } = Layout;

interface IndexPageProps extends AppState {}

const IndexPage: FunctionComponent<IndexPageProps> = ({ home }) => {
  return (
    <div className="index-page-container">
      <IndexHeader />

      <Content className="content-container">

        <nav className="view-nav">
          <ul className="view-list">
            <li className="nav-item active">推荐</li>
            <li className="nav-item">阅读</li>
          </ul>
        </nav>

        <div className="content-wrapper">

          <SelectionRow />

          <MainContent />

        </div>
      </Content>
      <Footer className="footer-container">create by 江景 2020</Footer>
    </div>
  );
};

export default connect(
  (state: AppState) => {
    return {
      home: state.home,
    };
  },
  (dispatch: Dispatch) => ({}),
)(IndexPage);
