import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

const suits = '♥♦♣♠';

test('Test that fourOfAKind returns truthy if hand holds four of a kind', () => {
  let hand = new Hand('♠7', '♥2', '♦2', '♣2', '♠2');
  expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
});
test('Test that fourOfAKind returns Falsy if hand does not hold holds four of a kind', () => {
  let hand = new Hand('♠2', '♥2', '♦3', '♣T', '♥4');
  expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
});

test('check that isFourOfAKind returns a higher score for a stronger hand (if two hands but with a FourOfAKind)', () => {
  let hand1 = new Hand('♥9', '♦9', '♣9', '♠9', '♦6');
  let hand2 = new Hand('♥7', '♦7', '♣7', '♠7', '♦6');
  let hand1Score = CompareHands.isFourOfAKind(hand1);
  let hand2Score = CompareHands.isFourOfAKind(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);

});