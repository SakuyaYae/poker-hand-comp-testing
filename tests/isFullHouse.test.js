import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

const suits = '♥♦♣♠';

test('Test that isFullHouse returns truthy if hand holds 3 of a kind and 2 of a kind', () => {
  let hand = new Hand('♠8', '♥7', '♦8', '♣7', '♥8');
  expect(CompareHands.isFullHouse(hand)).toBeTruthy();
});

test('Test that isFullHouse returns falsy if hand does not hold 3 of a kind and 2 of a kind', () => {
  let hand = new Hand('♠2', '♥7', '♦3', '♣7', '♥4');
  expect(CompareHands.isFullHouse(hand)).toBeFalsy();
});

test('check that isFullHouse returns a higher score for a stronger hand (if two hands but with a fullHouse)', () => {
  let hand1 = new Hand('♥9', '♦9', '♣9', '♠7', '♦7');
  let hand2 = new Hand('♥7', '♦7', '♣7', '♠K', '♦K');
  let hand1Score = CompareHands.isFullHouse(hand1);
  let hand2Score = CompareHands.isFullHouse(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);

});