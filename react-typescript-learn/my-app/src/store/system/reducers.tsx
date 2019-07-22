import { TOGGLE_SLIDER_MENU, ADD_TABS_FROM_SLIDE_MENU } from "./types";
import { SystemAction } from "./types";

import { SliderMenuConfig } from "../../containers/SliderMenu/menu-config";

export interface SystemState {
  isCloseSlider: boolean;
  tabs: SliderMenuConfig[];
}

const initSate: SystemState = {
  isCloseSlider: false,
  tabs: [],
};

export function systemReducer(state = initSate, action: SystemAction): SystemState {
  switch (action.type) {
    case TOGGLE_SLIDER_MENU:
      return { ...state, isCloseSlider: !state.isCloseSlider };
    case ADD_TABS_FROM_SLIDE_MENU:
      const { payload } = action;
      const tabs = state.tabs.concat();
      tabs.push(payload);
      return { ...state };
    default:
      return state;
  }
}
