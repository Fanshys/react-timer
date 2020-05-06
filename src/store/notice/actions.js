export const SHOW_NOTICE = 'SHOW_NOTICE';
export const HIDE_NOTICE = 'HIDE_NOTICE';

export const showNotice = notice => ({
	type: SHOW_NOTICE,
	payload: notice
});

export const hideNotice = notice => ({
	type: HIDE_NOTICE,
	payload: notice
});