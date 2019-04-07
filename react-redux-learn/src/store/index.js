import { createStore } from "redux";

import index from "./reducers/index";

export const store = createStore(index);