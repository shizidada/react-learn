import React, { FunctionComponent } from 'react';
import { List, ListRowProps } from 'react-virtualized';
import './index.less';

interface VirtualizedListProps {
  dataSource: any[];
}

const VirtualizedList: FunctionComponent<VirtualizedListProps> = ({ dataSource }) => {
  const list = dataSource;
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
    <div className="list-wrapper">
      <List height={800} width={300} rowHeight={100} rowCount={list.length} rowRenderer={renderItem} />
    </div>
  );
};

export default VirtualizedList;
