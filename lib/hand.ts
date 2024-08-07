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
    return this.isOfAKind(5)
  }

  private isRoyalFlush() {
    return this.isStraightFlush() && this.cards[0].rank === Rank.ACE && this.cards[1].rank === Rank.KING
  }

  private isStraightFlush() {
    return this.isStraight() && this.isFlush()
  }

  private isFourOfAKind() {
    return this.isOfAKind(4)
  }

  private isFullHouse() {
    return this.isThreeOfAKind() && this.isPair()
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
      const cardOne = this.cards[i] as Card
      const cardTwo = this.cards[i + 1] as Card
      if (cardOne.rank === Rank.ACE && cardTwo.rank === Rank.FIVE) continue
      if (cardOne.rank.value - cardTwo.rank.value !== 1) return false
    }
    return true
  }

  private isThreeOfAKind() {
    return this.isOfAKind(3)
  }

  private isTwoPair() {
    let pairCount = 0
    for (let count of this.rankHistogram.values()) {
      if (count === 2) pairCount++
    }
    return pairCount === 2
  }

  private isPair() {
    return this.isOfAKind(2)
  }

  private isOfAKind(n: number) {
    for (let count of this.rankHistogram.values()) {
      if (count === n) return true
    }
    return false
  }

  private get rankHistogram() {
    const rankHistogram = new Map<Rank, number>()
    for (let card of this.cards) {
      const rank = card.rank
      const count = rankHistogram.get(rank) || 0
      rankHistogram.set(rank, count + 1)
    }
    return rankHistogram
  }
}
