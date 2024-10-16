import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';const suits = '♥♦♣♠';

// Will fail since no code written in Compare Hands yet for the method
// isThreeOfAKind
test('Test that fourOfAKind returns truthy if hand holds four of a kind', () => {
  let hand = new Hand('♥2', '♦2', '♣2', '♠2', '♠7');
  expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
});