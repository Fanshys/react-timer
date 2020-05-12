import React from 'react'
import { connect } from 'react-redux'

class Register extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div className="register">
				Регистрация
			</div>
		)
	}
}

export default connect(null)(Register)