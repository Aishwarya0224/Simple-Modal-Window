'use strict';
// project variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// functions
const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//working with classes
for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].addEventListener('click', openModal));
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// handling "Esc" keypress event
document.addEventListener('keydown', function (event) {
  //console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
