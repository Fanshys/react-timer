import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux';


const Sidebar = ({ lists }) => {
	return (
		<aside className="sidebar">
			<ul className="sidebar__list">
				{lists.map(list => {
					return (
						<li className="sidebar-item" key={list.id}>
							<NavLink to={`/checklist/${list.id}`} className="sidebar-item__link" activeClassName="sidebar-item__link_active">{list.name}</NavLink>
						</li>
					)
				})}
			</ul>
			<Link to="/checklist/create" className="button sidebar__create">Создать</Link>
		</aside>
	)
}

const mapStateToProps = state => {
	return {
		lists: state.lists.lists
	}
}

export default connect(mapStateToProps, null)(Sidebar);