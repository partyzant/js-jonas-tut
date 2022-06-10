'use strict';

const btnsOpenModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
let openedModal;

const closeModal = () => {
  openedModal.classList.add('hidden');
  overlay.classList.add('hidden');
  openedModal = false;
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    // openedModal = document.querySelector('.' + this.dataset.modnr); internet explorer
    openedModal = document.querySelector(`.${this.dataset.modnr}`);
    openedModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener('click', function () {
    closeModal();
  });
}

overlay.addEventListener('click', function () {
  closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && openedModal) {
    closeModal();
  }
});
