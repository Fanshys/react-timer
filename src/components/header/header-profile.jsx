import React from 'react';
import { Link } from "react-router-dom";

class HeaderProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {authorized: props.authorized};
	}

	render() {
		if (this.state.authorized) {
			return (
				<div className="header-profile">
					<Link to="/profile" className="header-profile__link">Дмитрий Шабалин</Link>
					<button className="button header-profile__button" onClick={() => this.setState({authorized: false})}>Выйти</button>
				</div>
			)
		} else {
			return (
				<div className="header-profile">
					<button className="button header-profile__button" onClick={() => this.setState({authorized: true})}>Войти</button>
					<button className="button button_fill header-profile__button">Регистрация</button>
				</div>
			)
		}
	}
}

export default HeaderProfile;