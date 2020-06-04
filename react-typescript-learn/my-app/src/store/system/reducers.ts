import {
  TOGGLE_SLIDER_MENU,
  ADD_TABS_FROM_SLIDE_MENU,
  SET_CURRENT_TAB,
  SORT_CURRENT_TABS,
} from "./types";
import { SystemAction } from "./types";
import { SliderMenuConfig } from "../../typings";

export interface SystemState {
  isCloseSlide: boolean;
  tabs: SliderMenuConfig[];
  currentTab: string;
  activeKey: string;
}

const initSate: SystemState = {
  isCloseSlide: false,
  currentTab: "/",
  activeKey: "home",
  tabs: [
    {
      type: "",
      activeKey: "home",
      name: "首页",
      path: "/",
    },
  ],
};

export const systemReducer = (state = initSate, action: SystemAction): SystemState => {
  switch (action.type) {
    case TOGGLE_SLIDER_MENU:
      return { ...state, isCloseSlide: !state.isCloseSlide };
    case ADD_TABS_FROM_SLIDE_MENU:
      const { payload } = action;
      const { path, activeKey } = payload;
      const tabs = state.tabs.concat();
      const tab = tabs.some(item => item.path === path);
      if (!tab) {
        tabs.push(payload);
      }
      return { ...state, tabs: tabs, currentTab: `${payload.path}`, activeKey };
    case SET_CURRENT_TAB:
      const currentTab = action.payload;
      return { ...state, currentTab: `${currentTab}` };
    case SORT_CURRENT_TABS:
      return { ...state, tabs: action.payload };
    default:
      return state;
  }
};
