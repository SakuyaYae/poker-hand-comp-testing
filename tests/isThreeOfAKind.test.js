import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

const suits = '♥♦♣♠';

test('Test that threeOfAKind returns truthy is three of a kind', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠T', '♠7');
  expect(CompareHands.isThreeOfAKind(hand)).toBeTruthy();
});

test('Test that threeOfAKind returns falsy if not three of a kind', () => {
  let hand = new Hand('♥8', '♦2', '♣K', '♠3', '♠7');
  expect(CompareHands.isThreeOfAKind(hand)).toBeFalsy();
});

test('check that threeOfAKind returns a higher score for a stronger hand (if two hands but with threeOfAKind)', () => {
  let hand1 = new Hand('♣2', '♣6', '♦2', '♣K', '♥2');
  let hand2 = new Hand('♦T', '♦9', '♦5', '♣9', '♥9');
  let hand1Score = CompareHands.isThreeOfAKind(hand1);
  let hand2Score = CompareHands.isThreeOfAKind(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);

});