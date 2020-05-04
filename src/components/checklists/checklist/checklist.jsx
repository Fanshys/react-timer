import React, { Fragment } from 'react';
import ChecklistItem from './checklist-item';

const Checklist = (props) => {
	return (
		<Fragment>
			<ul className="checklist__list">
				{Object.values(props.checklist).map((checklist, key) => {
					return <ChecklistItem name={checklist.name} key={`${props.id}-${key}`} checked={checklist.checked}/>
				})}
			</ul>
		</Fragment>
	)
}

export default Checklist;