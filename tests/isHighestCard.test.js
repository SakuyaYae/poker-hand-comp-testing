import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

//const suits = '♥♦♣♠';



test('check that isHighestCard returns the highst card for the stronger hand', () => {
  let hand1 = new Hand('♣2', '♣6', '♠4', '♣8', '♣7');
  let hand2 = new Hand('♣4', '♦Q', '♠T', '♦4', '♣9');
  expect(CompareHands.rankToPoint(CompareHands.isHighestCard(hand2).rank)).toBeGreaterThan(CompareHands.rankToPoint(CompareHands.isHighestCard(hand1).rank));

});

test('check that isHighestCard returns the highst card for the stronger hand', () => {
  let hand1 = new Hand('♣2', '♣A', '♠4', '♣8', '♣7');
  let hand2 = new Hand('♣4', '♦Q', '♠T', '♦4', '♣9');
  expect(CompareHands.rankToPoint(CompareHands.isHighestCard(hand1).rank)).toBeGreaterThan(CompareHands.rankToPoint(CompareHands.isHighestCard(hand2).rank));

});