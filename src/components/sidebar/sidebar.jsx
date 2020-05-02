import React from 'react';
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
	return (
		<aside className="sidebar">
			<ul className="sidebar__list">
				<li className="sidebar-item">
					<NavLink to="/checklist/1" className="sidebar-item__link" activeClassName="sidebar-item__link_active">Чеклист 1</NavLink>
				</li>
				<li className="sidebar-item">
					<NavLink to="/checklist/2" className="sidebar-item__link" activeClassName="sidebar-item__link_active">Чеклист 2</NavLink>
				</li>
				<li className="sidebar-item">
					<NavLink to="/checklist/3" className="sidebar-item__link" activeClassName="sidebar-item__link_active">Чеклист 3</NavLink>
				</li>
			</ul>
		</aside>
	)
}

export default Sidebar;