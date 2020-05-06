import React from 'react'
import { connect } from 'react-redux';
import { createChecklistItem } from '../../store/checklists/actions'
import { showNotice, hideNotice } from '../../store/notice/actions'

class CreateChecklistItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: ''
		}
	}

	sendCreateChecklistItem = event => {
		event.preventDefault();
		const { name } = this.state;
		if (name.length) {
			const newListItem = {
				id: this.props.id,
				item: {
					id: new Date().getTime(),
					name: this.state.name
				}
			}
	
			this.props.createChecklistItem(newListItem);
			this.setState({
				name: ''
			})
		} else {
			this.props.showNotice({
				text: 'Введите название чеклиста'
			})

			setTimeout(() => this.props.hideNotice(), 3000)
		}
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
			<form className="checklists-create" onSubmit={this.sendCreateChecklistItem}>
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
	createChecklistItem,
	showNotice,
	hideNotice
}

export default connect(null, mapDispatchToProps)(CreateChecklistItem)