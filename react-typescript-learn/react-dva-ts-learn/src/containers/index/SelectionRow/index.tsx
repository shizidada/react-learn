import React, { FunctionComponent } from 'react';

import { Skeleton } from 'antd';

import './index.less';

interface SelectionRowProps {}

const SelectionRow: FunctionComponent<SelectionRowProps> = () => {
  return (
    <div className="selection-row-container">
      <div className="selection-row-wrapper">
        <div className="selection-left">
          <div className="image-box">

          </div>
        </div>
        <div className="selection-right">
          <div className="item-box">

          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectionRow;
