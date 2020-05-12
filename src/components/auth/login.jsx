import React from 'react'
import { connect } from 'react-redux'

class Login extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div className="login">
				Логин
			</div>
		)
	}
}

export default connect(null)(Login)