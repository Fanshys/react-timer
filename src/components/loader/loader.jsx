import React from 'react';

const Loader = () => {
	return (
		<div className="load">
			<div className="load__first"></div>
			<div className="load__second"></div>
			<div className="load__percent">0%</div>
		</div>
	)
}

document.addEventListener('DOMContentLoaded', function() {
  let count = 0;
  let interval = setInterval(function() {
    document.querySelector('.load__percent').innerHTML = `${count}%`;
    count++;
    if (count > 100) {
      clearInterval(interval);
      setTimeout(function() {
        document.querySelector('.load').remove();
      }, 500);
    }
  }, 20)
});

export default Loader;