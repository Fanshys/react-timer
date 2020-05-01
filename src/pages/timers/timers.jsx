import React from 'react';
import Timer from '../../components/timer/timer';

class Timers extends React.Component {
	render() {
		const timersArray = [
			{
				time: '01:02:45',
				name: 'My timer'
			},
			{
				time: '05:02:45',
				name: 'My timer 2'
			},
			{
				time: '01:42:45',
				name: 'My timer 3'
			},
		]

		return (
			<section className="timers">
				<div className="container">
					<h1>Таймеры</h1>
					<div className="timers__items">
						{timersArray.map((timer, key) => {
							return <Timer time={timer.time} name={timer.name} key={key} />
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