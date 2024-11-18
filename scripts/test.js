import {printDeck, printDeckValues, getCardValue, getCardSuit, shuffleDeck, dealDeck} from './deck.js';
let playerHands = [];
let deck = ['1C', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', '11C', '12C', '13C',
        '1D', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', '11D', '12D', '13D',
        '1H', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', '11H', '12H', '13H',
        '1S', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', '11S', '12S', '13S'
]
printDeck(deck);
printDeckValues(deck);
console.log(getCardValue('3S'));
console.log(getCardSuit('3S'));
console.log(shuffleDeck(deck));
dealDeck(deck, playerHands, 3, 3);
console.log(deck);
console.log(playerHands);