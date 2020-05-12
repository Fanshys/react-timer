import { combineReducers } from "redux";
import { timersReducer } from "./timers/reducers";
import { checklistsReducer } from "./checklists/reducers";
import { noticeReducer } from "./notice/reducers";

export default combineReducers({
	timers: timersReducer,
	lists: checklistsReducer,
	notice: noticeReducer,
});