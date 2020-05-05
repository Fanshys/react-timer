import React from 'react'
import { connect } from 'react-redux';
import { createChecklist } from '../../../store/checklists/actions'

class CreateChecklist extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: ''
		}
	}

	sendCreateChecklist = event => {
		event.preventDefault();
		const { name } = this.state;
		const newList = {
			name,
			id: new Date().getTime(),
			items: []
		}

		this.props.createChecklist(newList);
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
			<form className="checklists-create" onSubmit={this.sendCreateChecklist}>
				<input
					type="text"
					className="checklists-create__input input"
					placeholder="Введите название"
					value={this.state.name}
					onChange={this.changeInput}
				/>
				<button type="submit" className="checklists-create__submit button">Создать</button>
			</form>
		)
	}
}

const mapDispatchToProps = {
	createChecklist
}

export default connect(null, mapDispatchToProps)(CreateChecklist)