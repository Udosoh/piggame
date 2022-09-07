'use strict';
const currentScoreOne = document.getElementById('current--0');
const currentScoreTwo = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const holdDice = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let scoreOne = document.getElementById('score--0');
let scoreTwo = document.getElementById('score--1');

let totalScore = [0, 1];
scoreOne.textContent = 0;
scoreTwo.textContent = 0;
let playing = true;

const changeplayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore1 = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

currentScoreTwo.textContent = 0;
let currentScore1 = 0;
let activePlayer = 0;
dice.classList.add('hidden');

rollDice.addEventListener('click', function () {
  if (playing) {
    let dicenumber = Math.trunc(Math.random() * 6 + 1);

    dice.classList.remove('hidden');
    dice.src = `dice-${dicenumber}.png`;
    console.log(dicenumber);

    if (dicenumber !== 1) {
      currentScore1 += dicenumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore1;
    } else {
      changeplayer();
    }
  }
});

holdDice.addEventListener('click', function () {
  if (playing) {
    totalScore[activePlayer] += currentScore1;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];

    if (totalScore[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      playing = false;
    } else {
      changeplayer();
    }
  }
});

newGame.addEventListener('click', function () {
  totalScore = [0, 0];
  currentScore1 = 0;

  totalScore = [0, 0];
  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
  currentScoreOne.textContent = 0;
  currentScoreTwo.textContent = 0;
  playing = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
});
