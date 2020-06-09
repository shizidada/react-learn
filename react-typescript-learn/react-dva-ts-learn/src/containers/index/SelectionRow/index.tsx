import React, { FunctionComponent } from 'react';

import './index.less';
import RowItem from './RowItem';

interface SelectionRowProps {}

const SelectionRow: FunctionComponent<SelectionRowProps> = () => {
  return (
    <div className="selection-row-container">
      <div className="selection-row-wrapper">
        <div className="selection-left">
          <div className="image-box"></div>
        </div>
        <div className="selection-right">
          <div className="item-box">
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
