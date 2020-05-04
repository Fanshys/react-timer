import React from 'react'
import { connect } from 'react-redux';
import { createTimer } from '../../../store/timers/actions'

class CreateTimer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: ''
		}
	}

	sendCreateTimer = event => {
		event.preventDefault();
		const { name } = this.state;
		const newTimer = {
			name,
			time: 0,
			id: new Date()
		}

		this.props.createTimer(newTimer);
		this.setState({
			name: ''
		})
	}

	changeInput = event => {
		event.persist()
		this.setState(prev => ({
			...prev, ...{
				name: event.target.value
			}
		}))
	}

	render() {
		return (
			<form className="timers-create" onSubmit={this.sendCreateTimer}>
				<input
					type="text"
					className="timers-create__input input"
					placeholder="Введите название"
					value={this.state.name}
					onChange={this.changeInput}
				/>
				<button type="submit" className="timers-create__submit button">Создать</button>
			</form>
		)
	}
}

const mapDispatchToProps = {
	createTimer
}

export default connect(null, mapDispatchToProps)(CreateTimer)