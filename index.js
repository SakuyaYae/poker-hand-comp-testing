// import DeckOfCards from './DeckOfCards.js';
import Hand from './Hand.js';
import CompareHands from './CompareHands.js';

// ♥♦♣♠

let hand1 = new Hand('♥K', '♦9', '♣9', '♥9', '♠9');
let hand2 = new Hand('♣4', '♦9', '♠8', '♦3', '♣7');
//console.log(CompareHands.comparer(hand1, hand2));
console.log(CompareHands.isThreeOfAKind(hand1));
console.log(CompareHands.isFourOfAKind(hand1));
console.log("one pair: " + CompareHands.isOnePair(hand2));
//console.log("Two pair: " + CompareHands.isTwoPair(hand2));
//console.log("Fullhouse: " + CompareHands.isFullHouse(hand2));
console.log(CompareHands.isHighestCard(hand2));
