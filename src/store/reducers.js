import { combineReducers } from "redux";
import { timersReducer } from "./timers/reducers";

export default combineReducers({
	timers: timersReducer
});