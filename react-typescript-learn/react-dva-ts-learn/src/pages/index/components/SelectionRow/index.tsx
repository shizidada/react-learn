import React, { FunctionComponent } from 'react';
import './index.less';
import RowItem from './components/RowItem';


interface SelectionRowProps {}

const SelectionRow: FunctionComponent<SelectionRowProps> = () => {
  return (
    <div className="selection-row-container">
      <div className="selection-row-wrapper">
        <div className="selection-left">
          <div className="image-wrapper"></div>
          <div className="description">
            <p className="title">测试大标题</p>
            <p>测试小标题</p>
          </div>
        </div>
        <div className="selection-right">
          <div className="item-wrapper">
            <p className="item-title">精选</p>
            <RowItem />
            <RowItem />
            <RowItem />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectionRow;
