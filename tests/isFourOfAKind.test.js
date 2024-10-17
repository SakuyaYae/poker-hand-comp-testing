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
