import { combineReducers } from "redux";
import ajaxReducer from "./ajaxReducer";

export default combineReducers ({
    wetherReducer: ajaxReducer,
});