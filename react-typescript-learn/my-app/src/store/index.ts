import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { systemReducer } from "./system/reducers";
import { counterReducer } from "./counter/reducers";

const rootReducer = combineReducers({
  system: systemReducer,
  counter: counterReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  return createStore(rootReducer, composeWithDevTools(middleWareEnhancer));;
}
