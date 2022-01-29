import { createStore, combineReducers, applyMiddleware } from "redux";
import { info, top } from "./modules";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];

const enhencer = composeWithDevTools(applyMiddleware(...middlewares));

const rootReducer = combineReducers({ top, info });

const store = createStore(rootReducer, enhencer);

export default store;
