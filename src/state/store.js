import { createStoreHook } from "react-redux";
import reducers from "./reducers";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

// export const store = createStoreHook(reducers, {}, applyMiddleware(thunk));

export const store = createStore(reducers, {}, applyMiddleware(thunk));
