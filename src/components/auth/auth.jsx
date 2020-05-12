import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './login'
import Register from './register'

class Auth extends React.Component {
	render() {
		return(
			<section className="auth">
				<Switch>
					<Route path="/auth/login">
						{this.props.authorized && <Redirect to="/" />}
						{!this.props.authorized && <Login />}
					</Route>
					<Route path="/auth/register">
						{this.props.authorized && <Redirect to="/" />}
						{!this.props.authorized && <Register />}
					</Route>
				</Switch>
			</section>
		)
	}
}

export default connect(null)(Auth)