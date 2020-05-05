export const LOAD_LISTS = 'LOAD_LISTS';
export const CREATE_CHECKLIST = 'CREATE_CHECKLIST';
export const CREATE_CHECKLIST_ITEM = 'CREATE_CHECKLIST_ITEM';
export const CHECKLIST_CHANGE_CHECKED = 'CHECKLIST_CHANGE_CHECKED';

export const setChecklistItemChecked = list => ({
	type: CHECKLIST_CHANGE_CHECKED,
	payload: list
});

export const createChecklist = list => ({
	type: CREATE_CHECKLIST,
	payload: list
});

export const createChecklistItem = listItem => ({
	type: CREATE_CHECKLIST_ITEM,
	payload: listItem
})

export const loadLists = () => {
	return async dispatch => {
		const response = await fetch('https://fanshy.ru/json/lists.json')
		const json = await response.json()
		dispatch({type: LOAD_LISTS, payload: json})
	}
}