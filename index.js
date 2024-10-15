// import DeckOfCards from './DeckOfCards.js';
import Hand from './Hand.js';
import CompareHands from './CompareHands.js';

// ♥♦♣♠

let hand1 = new Hand('♠9', '♦9', '♣9', '♥9', '♥K');
let hand2 = new Hand('♣5', '♦J', '♣J', '♦5', '♣K');
//console.log(CompareHands.comparer(hand1, hand2));
console.log(CompareHands.isThreeOfAKind(hand1));
console.log(CompareHands.isFourOfAKind(hand1));
console.log(CompareHands.isOnePair(hand2));
console.log(CompareHands.isTwoPair(hand2));
