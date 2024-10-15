// import DeckOfCards from './DeckOfCards.js';
import Hand from './Hand.js';
import CompareHands from './CompareHands.js';

// ♥♦♣♠

let hand1 = new Hand('♠9', '♦9', '♣9', '♥9', '♥K');
let hand2 = new Hand('♣5', '♣T', '♣J', '♦Q', '♣K');
//console.log(CompareHands.comparer(hand1, hand2));
console.log(CompareHands.isThreeOfAKind(hand1));

