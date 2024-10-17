import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

const suits = '♥♦♣♠';

test('Test that isOnePair returns truthy if one pair', () => {
  let hand = new Hand('♥5', '♦2', '♣5', '♠A', '♠8');
  expect(CompareHands.isOnePair(hand)).toBeTruthy();
});

test('check that isOnePair returns falsey if not one pair', () => {
  let hand = new Hand('♣2', '♣Q', '♥4', '♣8', '♣7');
  expect(CompareHands.isOnePair(hand)).toBeFalsy();
});

test('check that isOnePair returns a higher score for a stronger hand (if two hands with onePair)', () => {
  let hand1 = new Hand('♦2', '♣6', '♣4', '♦6', '♣Q');
  let hand2 = new Hand('♦T', '♦9', '♦5', '♦Q', '♣9');
  let hand1Score = CompareHands.isOnePair(hand1);
  let hand2Score = CompareHands.isOnePair(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
 });