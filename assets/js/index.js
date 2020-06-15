import { dealer } from './dealer.js';

// On page Load
window.addEventListener('load', () => {
  const play = document.querySelector('.button');
  const playerImg = document.querySelectorAll('.test');
  playerImg.forEach(e => {
    e.src = './assets/images/back.png';
  });
  // On click on play
  play.addEventListener('click', (e) => {
    e.preventDefault();
    const wrappers = document.querySelectorAll('.card-container');
    const playerCards = document.querySelector('.player-2-cards');
    playerImg.forEach(e => {
      e.style.transform = 'rotateY(360deg)';
      e.style.transition = 'all 1.5s';
    });
    wrappers.forEach((e) => e.classList.add('flip')); // Adds flip card for each card container
    
    dealer();
  });
});
