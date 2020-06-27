import React, { FunctionComponent } from 'react';
import { Dispatch } from 'redux';
import { SortStart, SortEnd, SortEvent } from 'react-sortable-hoc';
import { connect } from 'dva';
import H from 'history';

import { SliderMenuConfig, AppState } from '../../../typings';
import DraggableTabBar, { DraggableTabBarProps } from './DraggableTabBar';

interface DraggableTabViewProps {
  dataSource?: SliderMenuConfig[];
  history: H.History;
  activeKey: string;
  updateGlobalStore: (record: object) => void;
}

const DraggableTabView: FunctionComponent<DraggableTabViewProps> = ({
  dataSource,
  history,
  activeKey,
  updateGlobalStore
}) => {
  const handleSortStart = (sort: SortStart, event: SortEvent) => {
    console.log('handleSortStart :: ', sort, event);
  };

  const handleSortEnd = (sort: SortEnd, event: SortEvent) => {
    const { newIndex, oldIndex } = sort;
    const newDataSource = [...(dataSource as SliderMenuConfig[])];

    // 元素移动
    newDataSource.splice(newIndex, 0, newDataSource.splice(oldIndex, 1)[0]);
    updateGlobalStore({ globalTabs: newDataSource });
    // console.log("handleSortEnd :: ", sort, event);
  };

  const handleClose = (item: any, event: any) => {
    console.log('handleClose :: ', item, event);
  };

  const handleClick = (item: SliderMenuConfig, event: any) => {
    updateGlobalStore({ activeKey: item.activeKey });

    const { path } = item;
    history.push(path as string);
    // console.log('handleClick :: ', item, event);
  };

  const handleRightClick = (e: any, item: any) => {
    console.log('handleRightClick :: ', e, item);
  };

  console.log('DraggableTabView :: dataSource', dataSource);

  return (
    <DraggableTabBar
      dataSource={dataSource as SliderMenuConfig[]}
      activeKey={activeKey}
      itemWrapper={(itemJsx: React.ReactNode[] | JSX.Element, item: DraggableTabBarProps, wrapperClassName: string) => {
        return (
          <div className={wrapperClassName} onContextMenu={(e) => handleRightClick(e, item)}>
            {itemJsx}
          </div>
        );
      }}
      onSortEnd={handleSortEnd}
      onSortStart={handleSortStart}
      onClose={handleClose}
      onClick={handleClick}
    />
  );
};

export default connect(
  ({ global }: AppState) => {
    return {
      dataSource: global.globalTabs,
      activeKey: global.activeKey
    };
  },
  (dispatch: Dispatch) => ({
    updateGlobalStore(record: object) {
      dispatch({
        type: 'global/updateGlobalStore',
        payload: record
      });
    }
  })
)(DraggableTabView);
