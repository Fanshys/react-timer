import React from 'react';
import Timer from './timer';
import { connect } from 'react-redux';
import CreateTimer from './createTimer';

class Timers extends React.Component {
	componentDidUpdate() {
		const json = JSON.stringify(this.props.timers)

		localStorage.setItem('timers', json)
	}

	render() {
		return (
			<section className="timers">
				<div className="container container_nopadding">
					<h1 className="timers__title">Таймеры</h1>
					<div className="timers__items">
						{this.props.timers.map((timer) => {
							return <Timer name={timer.name} key={timer.id} timeValue={timer.time} id={timer.id}/>
						})}
					</div>
					<CreateTimer />
				</div>
			</section>
		)
	}
}

const mapStateToProps = state => {
	return {
		timers: state.timers.timers
	}
}

export default connect(mapStateToProps, null)(Timers);