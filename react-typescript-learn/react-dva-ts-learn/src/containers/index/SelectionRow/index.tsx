import React, { FunctionComponent } from 'react';

import { Skeleton } from 'antd';

import './index.less';

interface SelectionRowProps {}

const SelectionRow: FunctionComponent<SelectionRowProps> = () => {
  return (
    <div className="selection-row-cotnainer">
      <div className="selection-row-wrapper">
        <div className="selection-left">
          <Skeleton loading />
        </div>
        <div className="selection-right">
          <Skeleton loading />
        </div>
      </div>
    </div>
  );
};
export default SelectionRow;
