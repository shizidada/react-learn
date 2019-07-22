import { SliderMenuConfig } from "../../containers/SliderMenu/menu-config";

export const TOGGLE_SLIDER_MENU = "TOGGLE_SLIDER_MENU";
export const ADD_TABS_FROM_SLIDE_MENU = "ADD_TABS_FROM_SLIDE_MENU";

export interface ToggleSliderMenu {
  type: typeof TOGGLE_SLIDER_MENU;
}

export interface AddTabFromSlideMenu {
  type: typeof ADD_TABS_FROM_SLIDE_MENU;
  payload: SliderMenuConfig;
}

export type SystemAction = ToggleSliderMenu | AddTabFromSlideMenu;
