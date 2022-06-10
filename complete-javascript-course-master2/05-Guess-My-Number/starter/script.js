'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const guessFeild = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const highscore = document.querySelector('.highscore');

let score = 20;

checkBtn.addEventListener('click', () => {
  score--;
  const guess = Number(guessFeild.value);
  // console.log(secretNumber, guess);

  if (!guess) {
    message.textContent = '⛔ No number!';
    return;
  }

  if (guess > secretNumber) {
    message.textContent = '🚷 za dużo!';
  } else if (guess < secretNumber) {
    message.textContent = '📉 za mało!';
  } else {
    message.textContent = '🍕 zgadłeś!!!';

    if (Number(highscore.textContent < score)) highscore.textContent = score;
    document.querySelector('.number').textContent = guess;
    document.body.style.backgroundColor = '#60b347';
  }

  document.querySelector('.score').textContent = score;
  if (score < 1 || guess === secretNumber) {
    guessFeild.disabled = true;
    checkBtn.disabled = true;
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;
  document.querySelector('.score').textContent = score;

  guessFeild.disabled = false;
  checkBtn.disabled = false;
  guessFeild.value = '';
  document.querySelector('.number').textContent = '?';
  document.body.style.removeProperty('background-color');
});
