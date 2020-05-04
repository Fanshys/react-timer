export const CREATE_TIMER = 'CREATE_TIMER';
export const DELETE_TIMER = 'DELETE_TIMER';
export const TIMER_CHANGE_TIME = 'TIMER_CHANGE_TIME';
export const TIMER_CHANGE_NAME = 'TIMER_CHANGE_NAME';

export const setTimerTime = time => ({
	type: TIMER_CHANGE_TIME,
	payload: time
});

export const setTimerName = name => ({
	type: TIMER_CHANGE_NAME,
	payload: name
});

export const createTimer = timer => ({
	type: CREATE_TIMER,
	payload: timer
});

export const deleteTimer = id => ({
	type: DELETE_TIMER,
	payload: id
})