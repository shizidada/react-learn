import { TOGGLE_SLIDER_MENU, ADD_TABS_FROM_SLIDE_MENU, SET_CURRENT_TAB } from "./types";
import { SystemAction } from "./types";
import { ItemConfig } from "./types";

export interface SystemState {
  isCloseSlider: boolean;
  tabs: ItemConfig[];
  currentTab: string;
}

const initSate: SystemState = {
  isCloseSlider: false,
  tabs: [
    {
      type: "",
      activeKey: "home",
      name: "首页",
      path: "/",
    },
  ],
  currentTab: "/",
};

export function systemReducer(state = initSate, action: SystemAction): SystemState {
  switch (action.type) {
    case TOGGLE_SLIDER_MENU:
      return { ...state, isCloseSlider: !state.isCloseSlider };
    case ADD_TABS_FROM_SLIDE_MENU:
      const { payload } = action;
      const tabs = state.tabs.concat();
      const tab = tabs.some(item => item.path === payload.path);
      if (!tab) {
        tabs.push(payload);
      }
      return { ...state, tabs: tabs, currentTab: `${payload.path}` };
    case SET_CURRENT_TAB:
      const currentTab = action.payload;
      return { ...state, currentTab: `${currentTab}` };
    default:
      return state;
  }
}
