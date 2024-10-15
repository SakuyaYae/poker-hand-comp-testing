export default class CompareHands {

  static suits = '♥♦♣♠';
  static ranks = '23456789TJQKA';

  // return the winning hand
  static comparer(hand1, hand2) {

    let comparers = [
      'isStraightFlush',
      'isFourOfAKind',
      'isFullHouse',
      'isFlush',
      'isStraight',
      'isThreeOfAKind',
      'isTwoPair',
      'isOnePair',
      'isHighestCard'
    ];

    for (let comparer of comparers) {
      let hand1Score = this[comparer](hand1);
      let hand2Score = this[comparer](hand2);
      console.log(comparer, 'hand1Score', hand1Score, 'hand2Score', hand2Score);
      // nobody has this kind combination - continue to next comparer
      if (hand1Score === 0 && hand2Score === 0) { continue; }
      // at least has one hand has this kind of combination
      // which hand won?
      if (hand1Score === hand2Score) { return [hand1, hand2]; }
      else if (hand1Score > hand2Score) { return hand1; }
      else { return hand2; }
    }

  }

  static counter(hand, caller){
    const multipleCards = [];
    for (let i = 0; i < hand.length; i++) {
     let count = 0; 
      for (let card of hand.cards) {
        for (let k = 0; k < CompareHands.suits.length; k++) {
          if (card.rank === CompareHands.suits[k]) {
            count++;
            multipleCards.push(card.suit + card.rank + "")

          }
        
        }
      } 
    }  
    if (multipleCards.length > 1) {
      let points;
      if (caller = "isOnePair") {
        for (let i = 0; i < multipleCards.length; i++) {
          points = this.rankToPoint(multipleCards[i])
        }
        return points;
        
      }if (caller = "isThreeOfAKind") {
        for (let i = 0; i < multipleCards.length; i++) {
          points = this.rankToPoint(multipleCards[i])
          
        }
        return points;
      }if (caller = "isFourOfAKind") {
        for (let i = 0; i < multipleCards.length; i++) {
          points = this.rankToPoint(multipleCards[i])
          
        }
        return points;
      }
    
    }
    if (multipleCards.length < 1) {
      return false
    }
  }

  

  static isStraightFlush(hand) {
    // if not straight or not flush -> 0
    // otherwise score of flush
    return this.isStraight(hand) && this.isFlush(hand);
  }

  static isFourOfAKind(hand) { // TODO!
    const score = this.counter(hand, "isFourOfAKind")
    if (!score) {
      return 0;
    } 
    return score
  }

  static isFullHouse(hand) { 
    return this.isThreeOfAKind(hand) && this.isOnePair(hand);
  }

  static isFlush(hand) {
    let suits = [];
    for (let card of hand.cards) {
      suits.push(card.suit);
    }
    // not a flush -> 0
    if ([...new Set(suits)].length !== 1) {
      return 0;
    }
    // return points depending of strength of flush
    this.sortByRank(hand);
    let score = 0, counter = 0;
    for (let card of hand.cards) {
      score += this.rankToPoint(card.rank) * 10 ** counter;
      counter += 2;
    }
    return score;
  }

  static isStraight(hand) {
    // sort from low to high
    this.sortByRank(hand);
    // get the ranks of the cards
    let ranks = '';
    for (let card of hand.cards) {
      ranks += card.rank;
    }
    // if both 2 and A then place A first
    if (ranks.includes('2') && ranks.includes('A')) {
      ranks = 'A' + ranks.slice(0, 4);
    }
    // not a straight -> 0
    if (!('A' + this.ranks).includes(ranks)) { return 0; };
    // return points depending on strength of straight
    return this.rankToPoint(ranks[4]);
  }

  static isThreeOfAKind(hand ) { // TODO!
    const score = this.counter(hand, "isThreeOfAKind")
    if (!score) {
      return 0;
    } 
    return score
  }

  static isTwoPair(hand) { // TODO!
    const score = this.isOnePair(hand) + this.isOnePair(hand)
    
    return score
  }

  static isOnePair(hand) { // TODO!
    const score = this.counter(hand, "isOnePair")
    if (!score) {
      return 0;
    }

    return score
  }

  static isHighestCard(hand) {
    if (!this.counter(hand) && !this.isStraight(hand) && !this.isFlush(hand)) {
      hand.cards = hand.cards.sort((b, a) => {
        return hand.cards[0] 
      });
    } 
  }


  // helper functions below:
  static rankToPoint(rank) {
    return this.ranks.indexOf(rank) + 2;
  }
  static sortByRank(hand) {
    hand.cards = hand.cards.sort((a, b) => {
      return this.rankToPoint(a.rank) < this.rankToPoint(b.rank) ?
        -1 : 1;
    });
  }


}