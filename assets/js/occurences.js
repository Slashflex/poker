/*
 * /!\ À essayer seul, me mp si trop compliqué !
 *
 * Le but de cette fonction est de déterminer le nombre de cartes ayant la même valeur dans un tableau :
 * cards = ['Ad', '7h', '8d', 'As', 'Qs'] alors occurences(cards)
 * retournera { as: 2, seven: 1, height: 1, queen: 1 }
 *
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 *
 */
import { CARDS } from "./utils.js";


// Check for card occurence
export const occurences = cards => {
  let occ = {};

  cards
    .map(card =>
      card
        .split("")
        .slice(0, card.length - 1)
        .join()
    )
    .forEach(val => {
      Object.entries(CARDS).forEach(card => {
        let key = card[0];
        let value = card[1];

        if (value == val) {
          if (occ[key]) {
            occ[key] += 1;
          } else {
            occ[key] = 1;
          }
        }
      });
    });

  return occ;
};
