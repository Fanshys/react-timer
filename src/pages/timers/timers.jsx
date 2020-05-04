import React from 'react';
import Timer from '../../components/timer/timer';
import { connect } from 'react-redux';
import CreateTimer from '../../components/createTimer/createTimer';

const Timers = ({timers}) => {
	return (
		<section className="timers">
			<div className="container">
				<h1>Таймеры</h1>
				<div className="timers__items">
					{timers.map((timer) => {
						return <Timer name={timer.name} key={timer.id} timeValue={timer.timeValue} />
					})}
				</div>
				<CreateTimer />
			</div>
		</section>
	)
}

const mapStateToProps = state => {
	return {
		timers: state.timers.timers
	}
}

export default connect(mapStateToProps, null)(Timers);