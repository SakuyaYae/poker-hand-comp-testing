import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

const suits = '♥♦♣♠';

test('check that isStraight returns truthy if straight', () => {
  let hand = new Hand('♥9', '♦8', '♣7', '♥5', '♦6');
  expect(CompareHands.isStraight(hand)).toBeTruthy();
});
test('check that isStraight returns falsy if straight', () => {
  let hand = new Hand('♥9', '♦8', '♣2', '♥5', '♦6');
  expect(CompareHands.isStraight(hand)).toBeFalsy();
});

test('check that isStraight returns a higher score for a stronger hand (if two hands but with a straight)', () => {
  let hand1 = new Hand('♥9', '♦8', '♣7', '♥5', '♦6');
  let hand2 = new Hand('♥9', '♦8', '♣7', '♥T', '♦6');
  let hand1Score = CompareHands.isStraight(hand1);
  let hand2Score = CompareHands.isStraight(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);

});