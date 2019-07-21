export interface SystemState {
  isOpenSlider: boolean;
}

export const TOGGLE_SLIDER_MENU = "TOGGLE_SLIDER_MENU";

export interface ToggleSliderMenu {
  type: typeof TOGGLE_SLIDER_MENU;
}

export type SystemAction = ToggleSliderMenu;
