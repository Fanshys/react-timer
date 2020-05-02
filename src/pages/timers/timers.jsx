import React from 'react';
import Timer from '../../components/timer/timer';

class Timers extends React.Component {
	render() {
		const timersArray = [
			{
				name: 'My timer',
				id: 1,
				timeValue: 600000
			},
			{
				name: 'My best incredible timer with longest name in the history of this fucking world',
				id: 2,
				timeValue: 0
			},
			{
				name: 'My timer 3',
				id: 3,
				timeValue: 0
			},
		]

		return (
			<section className="timers">
				<div className="container">
					<h1>Таймеры</h1>
					<div className="timers__items">
						{timersArray.map((timer) => {
							return <Timer name={timer.name} key={timer.id} timeValue={timer.timeValue}/>
						})}
					</div>
					<div className="timers-create">
						<input type="text" className="timers-create__input input" placeholder="Введите название" />
						<button type="submit" className="timers-create__submit button">Создать</button>
					</div>
				</div>
			</section>
		)
	}
}

export default Timers;