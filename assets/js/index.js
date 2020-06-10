import { dealer } from './dealer.js';

// On page Load
window.addEventListener('load', () => {
  const play = document.querySelector('.button');

  // On click on play
  play.addEventListener('click', (e) => {
    e.preventDefault();
    const wrappers = document.querySelectorAll('.card-container');
    wrappers.forEach((e) => e.classList.add('flip')); // Adds flip card for each card container
    dealer();
  });
});
