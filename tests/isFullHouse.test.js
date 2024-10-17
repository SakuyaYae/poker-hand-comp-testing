import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';const suits = '♥♦♣♠';

test('Test that isFullHouse returns truthy if hand holds 3 of a kind and 2 of a kind', () => {
  let hand = new Hand('♠7', '♥6', '♦6', '♣7', '♠6' );
  expect(CompareHands.isFullHouse(hand)).toBeTruthy();
});