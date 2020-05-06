import { SHOW_NOTICE, HIDE_NOTICE } from "./actions";

const defaultState = {
	notice: {
		text: '',
		visible: false
	}
}

export const noticeReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SHOW_NOTICE:
			return {
				...state,
				notice: {
					text: action.payload.text,
					visible: true
				}
			}

		case HIDE_NOTICE:
			return {
				...state,
				notice: {
					...state.notice,
					visible: false
				}
			}

		default:
			return state
	}
}