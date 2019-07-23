export interface ItemConfig {
  type: string;
  activeKey: string;
  name: string;
  path?: string;
}

export const TOGGLE_SLIDER_MENU = "TOGGLE_SLIDER_MENU";
export const ADD_TABS_FROM_SLIDE_MENU = "ADD_TABS_FROM_SLIDE_MENU";
export const SET_CURRENT_TAB = "SET_CURRENT_TAB";

export interface ToggleSliderMenu {
  type: typeof TOGGLE_SLIDER_MENU;
}

export interface AddTabFromSlideMenu {
  type: typeof ADD_TABS_FROM_SLIDE_MENU;
  payload: ItemConfig;
}

export interface SetCurrentTab {
  type: typeof SET_CURRENT_TAB;
  [key: string]: string;
}

export type SystemAction = ToggleSliderMenu | AddTabFromSlideMenu | SetCurrentTab;
