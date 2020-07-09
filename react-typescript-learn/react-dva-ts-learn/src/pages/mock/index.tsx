import { connect } from 'dva';
import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { AppState } from '../../typings';
// import GoodForm from './GoodForm';
// import VirtualizedList from './VirtualizedList';
import BeautifulDnd from './BeautifulDnd';
import './index.less';

interface MockPageProps extends AppState {}

const MockPage: FunctionComponent<MockPageProps> = ({ home }) => {
  // const { list = [] } = home;

  return (
    <div className="mock-page-container">
      {/* <VirtualizedList dataSource={list} />
      <GoodForm /> */}

      <BeautifulDnd />
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
)(MockPage);
