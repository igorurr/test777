import { createStore, combineReducers, applyMiddleware } from "redux";

import * as reducers from "./reducers";

export default createStore(combineReducers(reducers as {}));
