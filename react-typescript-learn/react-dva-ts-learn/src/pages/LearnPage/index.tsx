import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { List, ListRowProps } from 'react-virtualized';

import GoodForm from './GoodForm';
import { ConnectState } from '../../typings';

import './index.less';

interface LearnPageProps extends ConnectState {}

const LearnPage: FunctionComponent<LearnPageProps> = ({ home }) => {
  const { list = [] } = home;
  const renderItem = ({ index, isScrolling, key, style }: ListRowProps) => {
    return (
      <div key={key} style={style} className="row">
        <div className="image">
          <img src={list[index].image} alt="" />
        </div>
        <div className="content">
          <div>
            {list[index].id}
            {list[index].name}
          </div>
          <div>{list[index].text}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="learn-page-container">
      <div className="list-wrapper">
        <List
          height={800}
          width={300}
          rowHeight={100}
          rowCount={list.length}
          rowRenderer={renderItem}
        />
      </div>

      <GoodForm />
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
)(LearnPage);
