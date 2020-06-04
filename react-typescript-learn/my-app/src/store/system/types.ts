import { SliderMenuConfig } from "../../typings";

export const TOGGLE_SLIDER_MENU = "TOGGLE_SLIDER_MENU";
export const ADD_TABS_FROM_SLIDE_MENU = "ADD_TABS_FROM_SLIDE_MENU";
export const SET_CURRENT_TAB = "SET_CURRENT_TAB";
export const SORT_CURRENT_TABS = "SORT_CURRENT_TABS";

export interface ToggleSliderMenu {
  type: typeof TOGGLE_SLIDER_MENU;
}

export interface AddTabFromSlideMenu {
  type: typeof ADD_TABS_FROM_SLIDE_MENU;
  payload: SliderMenuConfig;
}

export interface SetCurrentTab {
  type: typeof SET_CURRENT_TAB;
  [key: string]: string;
}

export interface SortCurrentTabs {
  type: typeof SORT_CURRENT_TABS;
  payload: SliderMenuConfig[];
}

export type SystemAction = ToggleSliderMenu | AddTabFromSlideMenu | SetCurrentTab | SortCurrentTabs;
