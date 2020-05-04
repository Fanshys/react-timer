import { CREATE_TIMER, TIMER_CHANGE_NAME, TIMER_CHANGE_TIME } from "./actions";

const defaultState = {
	timers: []
}

export const timersReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CREATE_TIMER:
			return {
				...state,
				timers: [...state.timers, action.payload]
			}

		case TIMER_CHANGE_NAME:
			return {
				...state,
				name: action.payload
			}

		case TIMER_CHANGE_TIME:
			return {
				...state,
				time: action.payload
			}

		default:
			return state
	}
}