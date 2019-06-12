import { combineReducers } from "redux";

import CounterReducer from "./counterReducer";

const reducers = combineReducers({
  counter: CounterReducer
});

export default reducers;
