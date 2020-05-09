import React from 'react';

import { loremIpsum } from 'lorem-ipsum';
import { List, ListRowProps } from 'react-virtualized';

import './loadsh.test';
import './index.less';

const list = Array(12000)
  .fill({})
  .map((val, idx) => {
    return {
      id: idx,
      name: 'John Doe',
      image: 'http://via.placeholder.com/40',
      text: loremIpsum({
        count: 1,
        units: 'sentences',
        sentenceLowerBound: 4,
        sentenceUpperBound: 8,
      }),
    };
  });

console.log(list);

const IndexPage: React.FunctionComponent = () => {
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

  const renderRow = (item: any) => {
    return (
      <div key={item.id} className="row">
        <div className="image">
          <img src={item.image} alt="" />
        </div>
        <div className="content">
          <div>
            {item.id} {item.name}
          </div>
          <div>{item.text}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="index-page-contaienr">
      <List
        height={800}
        width={1000}
        rowHeight={50}
        rowCount={list.length}
        rowRenderer={renderItem}
      />
    </div>
  );
};

export default IndexPage;
