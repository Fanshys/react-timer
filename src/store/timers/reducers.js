import { CREATE_TIMER, TIMER_CHANGE_NAME, TIMER_CHANGE_TIME, DELETE_TIMER, LOAD_TIMERS } from "./actions";

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

		case DELETE_TIMER:
			return {
				...state,
				timers: state.timers.filter(timer => {
					return timer.id !== action.payload
				})
			}

		case TIMER_CHANGE_NAME:
			return {
				...state,
				name: action.payload
			}

		case TIMER_CHANGE_TIME:
			return {
				...state,
				timers: [...state.timers].map(timer => {
					if (timer.id === action.payload.id) {
						timer.time = action.payload.time
					}
					return timer
				})
			}

		case LOAD_TIMERS:
			return {
				...state,
				timers: [...state.timers, ...action.payload]
			}

		default:
			return state
	}
}