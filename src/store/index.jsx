import { createStore, applyMiddleware } from "redux";
import rootReducers from "./rootReducer";

// import reducer from './reducers'
// import mySaga from './sagas'

const store = createStore(
  rootReducers
  // applyMiddleware(sagaMiddleware)
);

// sagaMiddleware.run(mySaga)

export default store;
