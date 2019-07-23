import { TOGGLE_SLIDER_MENU, ADD_TABS_FROM_SLIDE_MENU, SET_CURRENT_TAB } from "./types";
import { ToggleSliderMenu, AddTabFromSlideMenu, SetCurrentTab } from "./types";
import { ItemConfig } from "./types";

export function toggleSliderMenu(): ToggleSliderMenu {
  return {
    type: TOGGLE_SLIDER_MENU,
  };
}

export function addTabFromSlidMenu(payload: ItemConfig): AddTabFromSlideMenu {
  return {
    type: ADD_TABS_FROM_SLIDE_MENU,
    payload: payload,
  };
}

export function setCurrentTab(payload: string): SetCurrentTab {
  return {
    type: SET_CURRENT_TAB,
    payload: payload,
  };
}
