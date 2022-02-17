'use strict'
const score0 = document.querySelector('#score0');
const score1 = document.getElementById('score1');
const diceroll = document.querySelector('.dice');
const btnNEW = document.querySelector('.btn--new');
const btnROLL = document.querySelector('.btn--roll');
const btnHOLD = document.querySelector('.btn--hold');
let current_score0 = document.querySelector('#c-score0');
let current_score1 = document.querySelector('#c-score1');

let playing = true;
let current_score = 0;
let finalScore = [0, 0];
let activePlayer = 0;
const turn = "#c-score";
score0.textContent = 0;
score1.textContent = 0;
diceroll.classList.add('hidden');

const switchUser = function () {
	current_score = 0;
	let string = turn + activePlayer;
	document.querySelector(string).textContent = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	//it works similar to conditions below if player--active is available this method remove that and if is not available add it to class .
	document.querySelector(".player--0").classList.toggle('player--active');
	document.querySelector(".player--1").classList.toggle('player--active');
}

btnROLL.addEventListener('click', function () {
	if (playing) {
		const randomnum = Math.trunc(Math.random() * 6) + 1;
		console.log(randomnum);
		diceroll.classList.remove('hidden');
		const address = "pictures/dice-" + String(randomnum) + ".png";
		diceroll.src = address;
		if (randomnum != 1) {
			let string = turn + activePlayer;
			current_score += randomnum;
			document.querySelector(string).textContent = current_score;
		}
		else {

			switchUser();
			// if (activePlayer) {
			// 	document.querySelector(".player--0").classList.remove('player--active');

			// 	document.querySelector(".player--1").classList.add('player--active');
			// }
			// else {
			// 	document.querySelector(".player--1").classList.remove('player--active');

			// 	document.querySelector(".player--0").classList.add('player--active');
			// }
		}
	}
})

btnHOLD.addEventListener('click', function () {
	if (playing) {
		finalScore[activePlayer] += current_score;
		let turnStr = "score" + activePlayer;
		document.getElementById(turnStr).textContent = finalScore[activePlayer];
		let winnerSTR = ".player--" + activePlayer;
		if (finalScore[activePlayer] >= 100) {
			document.querySelector(winnerSTR).classList.add('player--winner');
			playing = false;
			diceroll.classList.add('hidden');
			btnHOLD.classList.add('lose');
			btnROLL.classList.add('lose');
		}
		else {
			switchUser();
		}
	}
})

btnNEW.addEventListener('click', function () {
	playing = true;
	current_score = 0;
	activePlayer = 0;
	finalScore = [0, 0];

	diceroll.classList.add('hidden');
	document.querySelector('.player--0').classList.remove('player--winner');
	document.querySelector('.player--1').classList.remove('player--winner');
	document.querySelector('.player--0').classList.add('player--active');
	document.querySelector('.player--1').classList.remove('player--active');
	btnHOLD.classList.remove('lose');
	btnROLL.classList.remove('lose');

	document.querySelector('#c-score0').textContent = 0;
	document.querySelector('#c-score1').textContent = 0;
	document.querySelector('#score0').textContent = 0;
	document.querySelector('#score1').textContent = 0;

})