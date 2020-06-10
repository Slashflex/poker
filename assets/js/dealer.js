/*
 * /!\ À faire seul !
 * Le but de cette fonction est de générer deux tableaux contenants 5 cartes différentes
 * il ne doit y avoir aucun doublon dans les tableaux !
 *
 * Exemple dealer() => [['As', '3s', '2h', '8d', '8s'], ['As', '3s', '2h', '8d', '8s']]
 *
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 *
 */
const dealer = () => {
  const cardValue = {
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    ace: "ace",
    jack: "jack",
    queen: "queen",
    king: "king",
  };

  const cardType = {
    clubs: "clubs",
    spades: "spades",
    hearts: "hearts",
    diamonds: "diamonds",
  };

  const combined = [];

  // Build images file names based on above objects
  for (const [key, value] of Object.entries(cardValue)) {
    for (const [key, type] of Object.entries(cardType)) {
      let fileName = `assets/images/cards/${value}_of_${type}.png`;
      combined.push(fileName);
    }
  }

  // Shuffle deck
  const test = shuffle(combined)

  // Final deck
  let deck = test.slice(0, 9);

  // Draws 5 cards to the game
  for (let i = 0; i < 5; i++) {
    document.getElementById(`card${i}`).src = deck[i];
  }
  for (let i = 5; i < 7; i++) {
    document.querySelector(`.player1-card-${i-4}`).src = deck[i];
  }
  for (let i = 7; i < 9; i++) {
    document.querySelector(`.player2-card-${i-6}`).src = deck[i];
  }
}

// Shuffle array
const shuffle = array => {
  let shufDeck = []
  let index = 0
  let size = array.length
  for (var j = 0; j < size; j++) {
    index = Math.floor(Math.random() * array.length)
    shufDeck.push(array[index])
    array.splice(index, 1);
  }
  return shufDeck;
}

// On page Load
window.addEventListener('load', () => {
  const play = document.querySelector('.button');

  // On click on play
  play.addEventListener('click', e => {
    e.preventDefault();
    const wrappers = document.querySelectorAll('.card-container')
    wrappers.forEach(e => e.classList.add('flip')) // Adds flip card for each card container
    dealer()
  })
})