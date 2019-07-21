import { TOGGLE_SLIDER_MENU } from "./types";
import { SystemState, SystemAction } from "./types";

const initSate: SystemState = {
  isOpenSlider: false,
};

export function systemReducer(state = initSate, action: SystemAction): SystemState {
  switch (action.type) {
    case TOGGLE_SLIDER_MENU:
      return { ...state, isOpenSlider: !state.isOpenSlider };
  }
  return state;
}
