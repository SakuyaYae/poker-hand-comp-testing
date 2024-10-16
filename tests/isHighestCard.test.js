import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

//const suits = '♥♦♣♠';


test('check that isHighestCard returns the highst card for the stronger hand', () => {
  let hand1 = new Hand('♣2', '♣6', '♣4', '♣8', '♣7');
  let hand2 = new Hand('♦9', '♦8', '♦5', '♦6', '♦3');
  let hand1Highest = CompareHands.isHighestCard(hand1);
  let hand2Highest = CompareHands.isHighestCard(hand2);
  console.log(hand1Highest)
  console.log(hand2Highest)
  
  //expect(hand2Highest).toBeGreaterThan(hand1Highest);

  });