import { combineReducers } from "redux";

import logInReducer from "./logIn/reducer";

const rootReducers = () =>
  combineReducers({
    logIn: logInReducer,
  });

export default rootReducers;
