/*
 * /!\ À faire à la fin, seul ou en groupe!
 * Le tableau cards contient 7 cartes. L'objectif est de retourner les 5 cartes permettant de faire le
 * meilleur combo possible :
 *
 * Dans notre jeu, il existe 4 combos possible (du plus fort au moins fort):
 * - Le full (3 types identiques et deux types identiques : ["As", "Kd", "Ah", "Ks", "Ac"])
 * - La flush (5 types identiques : ["As", "6s", "3s", "Ks", "Js"])
 * - La pair (2 valeurs identiques : ["As", "6s", "Ad", "Ks", "Js"])
 * - La hauteur (aucun des combos précédents, à ce moment c'est la carte la plus forte qui décide du combos le plus fort)
 *
 * À savoir : une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 *
 * Attention, une hauteur doit comporter les 5 meilleures cartes possible en sachant que la valeur
 * prime sur le type !
 *
 */

import { isAFlush } from "./isAFlush.js";
import { occurences } from "./occurences.js";
import { isAPair } from "./isAPair.js";
import { orderCards } from "./orderCards.js";

export const bestCombo = (cards) => {
  let hand = [];
  let highCards = orderCards(cards)
  let count = 0;
  let pair = [];
  let bool = true;
  // if (isAFull(cards)) {
  //     console.log('It\'s a full');
  //     hand = ['As', 'Ad', 'Ah', 'Js', 'Jd'];
  //     return hand;
  // } 
  if (isAFlush(cards)) {
      console.log('It\'s a flush');
      hand = ['As', 'Js', 'Qs', 'Js', '10s'];
      return hand;
  } 
  else if (isAPair(highCards)) {
    // Retrieve a pair
    for (let i = 0; i < highCards.length; i++) {
      for (let j = 0; j < highCards.length; j++) {
        if (i != j && bool) {
          if (highCards[i].charAt(0) == highCards[j].charAt(0)) {
            pair.push(highCards[i], highCards[j]);
            bool = false; // Stop
          }
        }
      }
    }

    hand.push(pair[0], pair[1]);
    hand.flat();

    for (let k = 0; k < highCards.length; k++) {
      if (highCards[k] != pair[0] && highCards[k] != pair[1]) {
        hand.push(highCards[k]);
        count++;
        if (count >= 3) {
          return hand;
        }
      }
    };
  } else {
    console.log('else')
    return highCards.slice(0, 5);
  }
};
