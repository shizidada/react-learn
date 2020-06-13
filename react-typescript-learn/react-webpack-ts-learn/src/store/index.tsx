import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from "redux-devtools-extension";

import { counterReducer } from './counter/reducers';

const rootReducer = combineReducers({
  counter: counterReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const rootMiddleware = applyMiddleware(thunkMiddleware);

export default function() {
  return createStore(rootReducer, rootMiddleware);
}

