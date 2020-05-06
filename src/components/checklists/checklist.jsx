import React, { Fragment } from 'react';
import ChecklistItem from './checklistItem';
import CreateChecklistItem from './createChecklistItem';

const Checklist = (props) => {
	return (
		<Fragment>
			<h2>{props.checklist.name}</h2>
			<ul className="checklist__list">
				{props.checklist.items.map((checklist, key) => {
					return <ChecklistItem name={checklist.name} key={`${checklist.id}-${key}`} checked={checklist.checked} id={checklist.id} parentId={props.checklist.id} />
				})}
			</ul>
			<CreateChecklistItem id={props.checklist.id}/>
		</Fragment>
	)
}

export default Checklist;