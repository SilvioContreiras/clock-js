
const secondHand =  document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();

	// Seconds
	const sec = now.getSeconds();
	const secondsDeg = ((sec / 60) * 360) + 90;
	secondHand.style.transform =  `rotate(${secondsDeg}deg)`;

	// Minutos
	const min = now.getMinutes();
	const minDeg = ((min / 60) * 360) + 90;
	minHand.style.transform = `rotate(${minDeg}deg)`;

	// Hour
	const hourDeg = ((min / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hourDeg}deg)`;

	console.log(secondsDeg);
}

setInterval(setDate, 1000);