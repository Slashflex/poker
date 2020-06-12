import {
  DECK_52,
  VALUES_NAME,
  TYPES_NAME,
  imagesClass,
  shuffle
} from './utils.js';
import { bestCombo } from './bestCombo.js';

// Get the file name of a card: 'Ac' => return 'ace_of_clubs.png'
const getCardName = card => {
  let value = card.slice(0, card.length - 1);
  let type = card.charAt(card.length - 1);
  return `assets/images/cards/${[VALUES_NAME[value], TYPES_NAME[type]].join(
    '_of_'
  )}.png`;
}

// Draws 9 card to the game, 2 for each players + 5 for the flop
export const dealer = () => {
  const deck = shuffle(DECK_52);
  const tableCards = deck.slice(0, 9);
  const imgSrc = tableCards.map((card) => getCardName(card));

  // Build images file names 
  for (let i = 0; i < imagesClass.length; i++) {
    imagesClass[i].src = imgSrc[i];
  }

  const heroCards = [tableCards[0], tableCards[1], tableCards.slice(4, 9)].flat();
  const vilainCards = [tableCards[2], tableCards[3], tableCards.slice(4, 9)].flat();

  bestCombo(heroCards, 'Hero')
  bestCombo(vilainCards, 'Vilain')
  // bestCombo(vilainCards)
};

// Confetti rain
// const create = i => {
//   var width = Math.random() * 8;
//   var height = width * 0.4;
//   var colourIdx = Math.ceil(Math.random() * 3);
//   var colour = "red";
//   switch(colourIdx) {
//     case 1:
//       colour = "yellow";
//       break;
//     case 2:
//       colour = "blue";
//       break;
//     default:
//       colour = "red";
//   }
//   $(`<div class="confetti-${i} ${colour}"></div>`).css({
//     "width" : `${width}px`,
//     "height" : `${height}px`,
//     "top" : `${-Math.random() * 20}%`,
//     "left" : `${Math.random() * 100}%`,
//     "opacity" : `${Math.random() + 0.5}`,
//     "transform" : `rotate(${Math.random() * 360}deg)`
//   }).appendTo('.main');  
  
//   drop(i);
// }

// const drop = x => {
//   $('.confetti-'+x).animate({
//     top: "100%",
//     left: `+= ${Math.random() * 15}%`
//   }, Math.random() * 3000 + 3000, () => {
//     reset(x);
//   });
// }

// const reset = x => {
//   $('.confetti-'+x).animate({
//     "top" : `${-Math.random() * 20}%`,
//     "left" : `-= ${+Math.random() * 15}%`
//   }, 0, () => {
//     drop(x);             
//   });
// }

// for (var i = 0; i < 200; i++) {
//   create(i);
// }