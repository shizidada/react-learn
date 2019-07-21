import { TOGGLE_SLIDER_MENU } from "./types";
import { ToggleSliderMenu } from "./types";

export function toggleSliderMenu(): ToggleSliderMenu {
  return {
    type: TOGGLE_SLIDER_MENU,
  };
}
