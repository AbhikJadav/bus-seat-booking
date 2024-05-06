// store.js
import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
// import rootReducer from './reducers'; // assuming you have a root reducer

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import ReservationReducer from "./ReservationReduer";
import logger from "redux-logger";
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  // example: exampleReducer,
  reservationReducer: ReservationReducer,
  // Add other reducers here
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(logger));
export const persistor = persistStore(store);
