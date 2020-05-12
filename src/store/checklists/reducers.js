import { CHECKLIST_CHANGE_CHECKED, CREATE_CHECKLIST, CREATE_CHECKLIST_ITEM, LOAD_LISTS, DELETE_CHECKLIST } from "./actions";

const defaultState = {
	lists: []
}

export const checklistsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CREATE_CHECKLIST:
			return {
				...state,
				lists: [...state.lists, action.payload]
			}

		case CHECKLIST_CHANGE_CHECKED:
			return {
				...state,
				lists: [...state.lists].map(list => {
					if (list.id === action.payload.id) {
						list.items.map(item => {
							if (item.id === action.payload.itemId) {
								item.checked = action.payload.checked
							}
							return item
						})
					}
					return list
				})
			}

		case CREATE_CHECKLIST_ITEM:
			return {
				...state,
				lists: [...state.lists].map(list => {
					if (list.id === action.payload.id) {
						return {
							...list,
							items: [...list.items, action.payload.item]
						}
					}
					return list
				})
			}

		case LOAD_LISTS:
			return {
				...state,
				lists: [...state.lists, ...action.payload]
			}

		case DELETE_CHECKLIST:
			return {
				...state,
				lists: state.lists.filter(list => {
					return list.id !== action.payload
				})
			}

		default:
			return state
	}
}