import { TOGGLE_SLIDER_MENU, ADD_TABS_FROM_SLIDE_MENU } from "./types";
import { ToggleSliderMenu, AddTabFromSlideMenu } from "./types";

import { SliderMenuConfig } from "../../containers/SliderMenu/menu-config";

export function toggleSliderMenu(): ToggleSliderMenu {
  return {
    type: TOGGLE_SLIDER_MENU,
  };
}

export function addTabFromSlidMenu(payload: SliderMenuConfig): AddTabFromSlideMenu {
  return {
    type: ADD_TABS_FROM_SLIDE_MENU,
    payload: payload,
  };
}
