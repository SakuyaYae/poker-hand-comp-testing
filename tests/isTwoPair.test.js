import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

test('Test that isTwoPair returns truthy if two pair', () => {
  let hand = new Hand('♥5', '♦8', '♣5', '♠3', '♠8');
  expect(CompareHands.isTwoPair(hand)).toBeTruthy();
});

test('check that isTwoPair returns falsey if not two pair', () => {
  let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
  expect(CompareHands.isTwoPair(hand)).toBeFalsy();
});

test('check that isTwoPair returns a higher score for a stronger hand (if two hands with twoPair)', () => {
  const suits = '♥♦♣♠';
  let hand1 = new Hand('♦2', '♣2', '♣4', '♦4', '♣7');
  let hand2 = new Hand('♣5', '♦9', '♦5', '♦Q', '♣9');
  let hand1Score = CompareHands.isTwoPair(hand1);
  let hand2Score = CompareHands.isTwoPair(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);

});