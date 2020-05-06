import React from 'react';
import { connect } from 'react-redux';

const Notice = ({ notice }) => {
	const classes = ['notice']

	if (notice.visible) {
		classes.push('notice_show');
	}

	return (
		<div className={classes.join(' ')}>
			{notice.text}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		notice: state.notice.notice
	}
}

export default connect(mapStateToProps)(Notice)