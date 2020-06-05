import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { SortStart, SortEnd, SortEvent } from "react-sortable-hoc";
import { SliderMenuConfig } from "../../typings";

import H from "history";

import { sortCurrentTabs } from "../../store/system/actions";
import DraggableTabsBar from "./DraggableTabsBar";
import { AppState } from "../../store";
import { withRouter } from "react-router-dom";

interface PageTabsProps {
  dataSource?: SliderMenuConfig[];
  history: H.History;
  activeKey: string;
  sortCurrentTabs: (payload: SliderMenuConfig[]) => void;
}

const PageTabs: FunctionComponent<PageTabsProps> = ({
  dataSource,
  history,
  activeKey,
  sortCurrentTabs,
}) => {
  const handleSortStart = (sort: SortStart, event: SortEvent) => {
    console.log("handleSortStart :: ", sort, event);
  };

  const handleSortEnd = (sort: SortEnd, event: SortEvent) => {
    const { newIndex, oldIndex } = sort;
    const newDataSource = [...(dataSource as SliderMenuConfig[])];

    // 元素移动
    newDataSource.splice(newIndex, 0, newDataSource.splice(oldIndex, 1)[0]);
    console.log("handleSortEnd :: ", newDataSource);
    sortCurrentTabs(newDataSource);
    // console.log("handleSortEnd :: ", sort, event);
  };

  const handleClose = (item: any, event: any) => {
    console.log("handleClose :: ", item, event);
  };

  const handleClick = (item: SliderMenuConfig, event: any) => {
    const { path } = item;
    history.push(path as string);
    console.log("handleClick :: ", item, event);
  };

  const handleRightClick = (e: any, item: any) => {
    console.log("handleRightClick :: ", e, item);
  };

  return (
    <DraggableTabsBar
      dataSource={dataSource as SliderMenuConfig[]}
      itemWrapper={(itemJsx: any, item: any, wrapperClassName: any) => {
        return (
          <div className={wrapperClassName} onContextMenu={e => handleRightClick(e, item)}>
            {itemJsx}
          </div>
        );
      }}
      onSortEnd={handleSortEnd}
      onSortStart={handleSortStart}
      onClose={handleClose}
      onClick={handleClick}
      activeKey={activeKey}
    />
  );
};

const mapStateToProps = ({ system }: AppState) => {
  return {
    dataSource: system.tabs,
    currentTab: system.currentTab,
    activeKey: system.activeKey,
  };
};
export default withRouter(connect(mapStateToProps, { sortCurrentTabs })(PageTabs));
