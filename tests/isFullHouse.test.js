import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js'; const suits = '♥♦♣♠';

test('Test that isFullHouse returns truthy if hand holds 3 of a kind and 2 of a kind', () => {
  let hand = new Hand('♠8', '♥7', '♦8', '♣7', '♥8');
  expect(CompareHands.isFullHouse(hand)).toBeTruthy();
});

test('Test that isFullHouse returns Falsy if hand does not hold 3 of a kind and 2 of a kind', () => {
  let hand = new Hand('♠2', '♥7', '♦3', '♣7', '♥4');
  expect(CompareHands.isFullHouse(hand)).toBeFalsy();
});