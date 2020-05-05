import { combineReducers } from "redux";
import { timersReducer } from "./timers/reducers";
import { checklistsReducer } from "./checklists/reducers";

export default combineReducers({
	timers: timersReducer,
	lists: checklistsReducer
});