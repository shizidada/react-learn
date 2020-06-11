import {
  createStore,
  combineReducers
  // applyMiddleware
} from 'redux';
// import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// import { HelloState } from "./hello/types/index";
// import { CounterAction } from "./hello/types";

import { counterReducer } from './counter/reducers';

const rootReducer = combineReducers({
  counterReducer: counterReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function() {
  const store = createStore(rootReducer);
  return store;
}

// const rootReducer = combineReducers({
//   enthusiasm: enthusiasm
// });

// export type AppState = ReturnType<typeof rootReducer>;

// export default function () {
//   const middlewares = [thunkMiddleware];
//   const middleWareEnhancer = applyMiddleware(...middlewares);

//   const store = createStore(
//     rootReducer,
//     composeWithDevTools(middleWareEnhancer));
//   return store;
// }
