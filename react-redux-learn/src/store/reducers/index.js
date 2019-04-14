import { combineReducers } from "redux";

import counter from "./count";

export default combineReducers({
  count: counter
});
