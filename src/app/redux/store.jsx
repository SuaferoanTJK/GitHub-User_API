import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { githubAPI } from "./reducer/githubReducer";

export default createStore(
  githubAPI,
  composeWithDevTools(applyMiddleware(thunk))
);
