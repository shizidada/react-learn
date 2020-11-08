import { Layout } from 'antd';
import { connect } from 'dva';
import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import MainContent from './components/MainContent';
import SelectionRow from './components/SelectionRow';
import { AppState } from '../../typings';
import './index.less';
import './lodash.test';

const { Content } = Layout;

interface IndexPageProps extends AppState {}

const IndexPage: FunctionComponent<IndexPageProps> = ({ home }) => {
  return (
    <div className="index-page-container">
      <Content className="index-page-content">
        <nav className="view-nav">
          <ul className="view-list">
            <li className="nav-item active">推荐</li>
            <li className="nav-item">阅读</li>
          </ul>
        </nav>

        <div className="index-content-wrapper">
          <SelectionRow />

          <MainContent />
        </div>
      </Content>
    </div>
  );
};

export default connect(
  (state: AppState) => {
    return {
      home: state.home
    };
  },
  (dispatch: Dispatch) => ({})
)(IndexPage);
