import React from 'react';

import { List, ListRowProps } from 'react-virtualized';

import './loadsh.test';
import './index.less';

const IndexPage: React.FunctionComponent = () => {
  const renderItem = ({ index, isScrolling, key, style }: ListRowProps) => {
    return (
      <span key={key}>
        {key}IndexPage Virtualized List <br />
      </span>
    );
  };

  return (
    <div className="index-page-contaienr">
      <List height={800} rowHeight={80} rowCount={1000} width={300} rowRenderer={renderItem} />
    </div>
  );
};

export default IndexPage;
