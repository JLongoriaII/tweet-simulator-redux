import { combineReducers } from "redux";
import modalsReducer from "./modalReducer.js";
import validationsReducer from "./validationsReducer.js";
import tweetsReducer from "./tweetsReducer.js";

export default combineReducers({
  modals: modalsReducer,
  validations: validationsReducer,
  tweets: tweetsReducer
});
