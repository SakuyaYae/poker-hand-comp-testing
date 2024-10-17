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

  static counter(hand, caller, callNum = 0) {
    var multipleCards = [];
    for (let i = 0; i < hand.cards.length; i++) {
      for (let k = 0; k < 5; k++) {
        if ((hand.cards[i].rank === hand.cards[k].rank) && (hand.cards[i].suit != hand.cards[k].suit)) {
          multipleCards.push(hand.cards[k].rank + "")
        }
      }
    }
    if (multipleCards.length > 1) {
      let points = 0;
      if (caller == "isOnePair") {
        if (callNum === 1) {
          multipleCards = multipleCards.sort((a, b) => this.rankToPoint(a) - this.rankToPoint(b));
        }
        if (callNum === 2) {
          multipleCards = multipleCards.sort((a, b) => this.rankToPoint(a) - this.rankToPoint(b));
          multipleCards = multipleCards.reverse();
        }
        const cards = multipleCards.slice(0, 2);
        for (let i = 0; i < cards.length; i++) {
          points += this.rankToPoint(cards[i])
        }
        return points;

      } if (caller == "isThreeOfAKind" && multipleCards.length >= 3) {
        if (callNum === 2) {
          multipleCards = multipleCards.sort((a, b) => this.rankToPoint(a) - this.rankToPoint(b));
          multipleCards = multipleCards.reverse();
        }
        const cards = multipleCards.slice(0, 3);
        for (let i = 0; i < cards.length; i++) {
          points += this.rankToPoint(cards[i])
        }
        return points;
      }
      if (caller == "isFullHouse" && multipleCards.length >= 5) {
        multipleCards = multipleCards.sort((a, b) => this.rankToPoint(a) - this.rankToPoint(b));
        const pairOne = [];
        pairOne.push(multipleCards.shift());
        pairOne.push(multipleCards.shift());
        multipleCards = multipleCards.reverse();
        const pairTwo = [];
        pairTwo.push(multipleCards.shift());
        pairTwo.push(multipleCards.shift());
        const oddOne = [];
        oddOne.push(multipleCards.shift());
        var cards = [];
        cards.push(pairOne[0]);
        cards.push(pairOne[1]);
        cards.push(pairTwo[0]);
        cards.push(pairTwo[1]);
        cards.push(oddOne[0]);
        cards = cards.sort((a, b) => this.rankToPoint(a) - this.rankToPoint(b));
        for (let i = 0; i < cards.length; i++) {
          points += this.rankToPoint(cards[i])
        }
        return points;
      }
      if (caller == "isFourOfAKind" && multipleCards.length >= 4) {
        const cards = multipleCards.slice(0, 4);
        for (let i = 0; i < cards.length; i++) {
          points += this.rankToPoint(cards[i])
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

  static isFourOfAKind(hand) {
    const score = this.counter(hand, "isFourOfAKind")
    if (!score) {
      return 0;
    }
    return score
  }

  static isFullHouse(hand) {
    const score = this.counter(hand, "isFullHouse")
    if (!score) {
      return 0;
    }
    return score;
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

  static isThreeOfAKind(hand, callNum = 0) {
    const score = this.counter(hand, "isThreeOfAKind", 2)
    if (!score) {
      return 0;
    }
    return score
  }

  static isTwoPair(hand) {
    const score = this.isOnePair(hand, 1) + this.isOnePair(hand, 2)

    return score
  }

  static isOnePair(hand, callNum = 1) {
    const score = this.counter(hand, "isOnePair", callNum)
    if (!score) {
      return 0;
    }

    return score
  }

  static isHighestCard(hand) {
    if (!this.counter(hand) && !this.isStraight(hand) && !this.isFlush(hand)) {
      hand.cards = hand.cards.sort((b, a) => {
        this.rankToPoint(a.rank) > this.rankToPoint(b.rank);
      });
      return hand.cards.reverse()[0];
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