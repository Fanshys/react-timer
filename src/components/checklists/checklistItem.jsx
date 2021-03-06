import React from 'react';
import { setChecklistItemChecked } from '../../store/checklists/actions';
import { connect } from 'react-redux';

const ChecklistItem = (props) => {

	const classes = ['checklist-item']

	if (props.checked) {
		classes.push('checklist-item_checked')
	}

	return (
		<li className={classes.join(' ')}>
			<label className="checklist-item__label">
				<input
					type="checkbox"
					checked={props.checked}
					onChange={() => props.setChecklistItemChecked({
						id: props.parentId,
						itemId: props.id,
						checked: !props.checked
					})}
					className="checklist-item__input"
				/>
				<span className="checklist-item__checkbox">
					<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
					</svg>
				</span>
				<span className="checklist-item__name">{props.name}</span>
			</label>
		</li>
	)
}

const mapDispatchToProps = {
	setChecklistItemChecked
}

export default connect(null, mapDispatchToProps)(ChecklistItem)