'use strict';

const playerEls = document.querySelectorAll('.player');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let gameEnd = false;
let currentScore = 0;
let activePlayer = 0;
let scoresTotal = [0, 0];

const updateCurrentElement = () => {
  if (activePlayer === 0) {
    current0El.textContent = currentScore;
  } else {
    current1El.textContent = currentScore;
  }
};

const gameEnding = () => {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');

  gameEnd = true;
};

const changePlayer = () => {
  scoresTotal[activePlayer] += currentScore;

  eval(`score${activePlayer}El.textContent = scoresTotal[${activePlayer}]`);
  eval(`current${activePlayer}El.textContent = 0`);

  if (scoresTotal[activePlayer] >= 10) gameEnding();

  activePlayer = activePlayer === 0 ? 1 : 0;

  playerEls.forEach(el => el.classList.toggle('player--active'));

  currentScore = 0;
};

btnRoll.addEventListener('click', () => {
  if (!gameEnd) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      updateCurrentElement();
    } else {
      currentScore = 0;
      updateCurrentElement();
      changePlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (!gameEnd) changePlayer();
});

btnNew.addEventListener('click', () => {
  gameEnd = false;

  currentScore = 0;
  scoresTotal = [0, 0];

  let winner = document.querySelector('.player--winner');
  if (winner) winner.classList.remove('player--winner');

  document.querySelectorAll('.score').forEach(el => {
    el.textContent = 0;
  });

  document.querySelectorAll('.current-score').forEach(el => {
    el.textContent = 0;
  });

  diceEl.classList.add('hidden');
});
