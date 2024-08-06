import { Card } from './card'
import { HandRank } from './hand-rank'
import { Rank } from './rank'

export class Hand {
  private cards: [Card, Card, Card, Card, Card]

  constructor(cards: [Card, Card, Card, Card, Card]) {
    this.cards = cards.sort((a, b) => b.compareTo(a))
  }

  toString() {
    return this.cards.map(card => card.toString()).join(' ')
  }

  compareTo(that: Hand) {
    if (this.rank !== that.rank) return this.rank - that.rank
    for (let i in this.cards) {
      const thisCard = this.cards[i] as Card
      const thatCard = that.cards[i] as Card
      let comparison = thisCard.compareTo(thatCard)
      if (comparison !== 0) return comparison
    }
    return 0
  }

  get rank() {
    if (this.isFiveOfAKind()) return HandRank.FIVE_OF_A_KIND
    if (this.isRoyalFlush()) return HandRank.ROYAL_FLUSH
    if (this.isStraightFlush()) return HandRank.STRAIGHT_FLUSH
    if (this.isFourOfAKind()) return HandRank.FOUR_OF_A_KIND
    if (this.isFullHouse()) return HandRank.FULL_HOUSE
    if (this.isFlush()) return HandRank.FLUSH
    if (this.isStraight()) return HandRank.STRAIGHT
    if (this.isThreeOfAKind()) return HandRank.THREE_OF_A_KIND
    if (this.isTwoPair()) return HandRank.TWO_PAIR
    if (this.isPair()) return HandRank.PAIR
    return HandRank.HIGH_CARD
  }

  private isFiveOfAKind() {
    return false
  }

  private isRoyalFlush() {
    return this.isStraightFlush() && this.cards[0].rank === Rank.ACE && this.cards[1].rank === Rank.KING
  }

  private isStraightFlush() {
    return this.isStraight() && this.isFlush()
  }

  private isFourOfAKind() {
    return false
  }

  private isFullHouse() {
    return false
  }

  private isFlush() {
    const suit = this.cards[0].suit
    for (let i = 1; i < this.cards.length; i++) {
      const card = this.cards[i] as Card
      if (card.suit !== suit) return false
    }
    return true
  }

  private isStraight() {
    for (let i = 0; i < this.cards.length - 1; i++) {
      const firstCard = this.cards[0] as Card
      const cardOne = this.cards[i] as Card
      const cardTwo = this.cards[i + 1] as Card
      if (cardOne.rank === Rank.ACE && cardTwo.rank === Rank.FIVE) continue
      if (cardOne.rank.value - cardTwo.rank.value !== 1) return false
    }
    return true
  }

  private isThreeOfAKind() {
    for (let i = 0; i < this.cards.length - 2; i++) {
      const cardOne = this.cards[i] as Card
      const cardTwo = this.cards[i + 1] as Card
      const cardThree = this.cards[i + 2] as Card
      if (cardOne.rank === cardTwo.rank && cardTwo.rank === cardThree.rank) return true
    }
    return false
  }

  private isTwoPair() {
    return this.countPairs() === 2
  }

  private isPair() {
    return this.countPairs() === 1
  }

  private countPairs() {
    let pairCount = 0
    for (let i = 0; i < this.cards.length - 1; i++) {
      const cardOne = this.cards[i] as Card
      const cardTwo = this.cards[i + 1] as Card
      if (cardOne.rank === cardTwo.rank) pairCount++
    }
    return pairCount
  }
}
