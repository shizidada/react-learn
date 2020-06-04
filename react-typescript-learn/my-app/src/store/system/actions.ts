import {
  TOGGLE_SLIDER_MENU,
  ADD_TABS_FROM_SLIDE_MENU,
  SET_CURRENT_TAB,
  SortCurrentTabs,
  SORT_CURRENT_TABS,
} from "./types";
import { ToggleSliderMenu, AddTabFromSlideMenu, SetCurrentTab } from "./types";

import { SliderMenuConfig } from "../../typings";

export const toggleSliderMenu = (): ToggleSliderMenu => {
  return {
    type: TOGGLE_SLIDER_MENU,
  };
};

export const addTabFromSlidMenu = (payload: SliderMenuConfig): AddTabFromSlideMenu => {
  return {
    type: ADD_TABS_FROM_SLIDE_MENU,
    payload: payload,
  };
};

export const setCurrentTab = (payload: string): SetCurrentTab => {
  return {
    type: SET_CURRENT_TAB,
    payload: payload,
  };
};

export const sortCurrentTabs = (payload: SliderMenuConfig[]): SortCurrentTabs => {
  return {
    type: SORT_CURRENT_TABS,
    payload: payload,
  };
};
