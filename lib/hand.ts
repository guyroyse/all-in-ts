import { Card } from './card'
import { Rank } from './rank'

enum HandRank {
  HIGH_CARD,
  PAIR,
  TWO_PAIR,
  THREE_OF_A_KIND,
  STRAIGHT,
  FLUSH,
  FULL_HOUSE,
  FOUR_OF_A_KIND,
  STRAIGHT_FLUSH,
  FIVE_OF_A_KIND
}

export class Hand {
  readonly cards: [Card, Card, Card, Card, Card]

  constructor(...cards: [Card, Card, Card, Card, Card]) {
    this.cards = cards.sort((left, right) => left.compare(right) * -1)
  }

  compare(that: Hand): number {
    return this.determineRank() - that.determineRank()
  }

  private determineRank(): HandRank {
    if (this.isFiveOfAKind()) return HandRank.FIVE_OF_A_KIND
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

  private isFiveOfAKind(): boolean {
    return this.isOfAKind(5)
  }

  private isStraightFlush(): boolean {
    return this.isStraight() && this.isFlush()
  }

  private isFourOfAKind(): boolean {
    return this.isOfAKind(4)
  }

  private isFullHouse(): boolean {
    return this.isThreeOfAKind() && this.isPair()
  }

  private isFlush(): boolean {
    for (let i = 0; i < 4; i++) {
      const card = this.cards[i] as Card
      const nextCard = this.cards[i + 1] as Card
      if (card.suit !== nextCard.suit) return false
    }
    return true
  }

  private isStraight(): boolean {
    for (let i = 0; i < 4; i++) {
      const card = this.cards[i] as Card
      const nextCard = this.cards[i + 1] as Card
      if (card.compare(nextCard) !== 1) return false
    }
    return true
  }

  private isThreeOfAKind(): boolean {
    return this.isOfAKind(3)
  }

  private isTwoPair(): boolean {
    return this.countPairs() === 2
  }

  private isPair(): boolean {
    return this.countPairs() === 1
  }

  private countPairs(): number {
    const histogram = this.rankHistogram()
    let count = 0
    for (const value of histogram.values()) {
      if (value === 2) count++
    }
    return count
  }

  isOfAKind(count: number): boolean {
    const histogram = this.rankHistogram()
    for (const value of histogram.values()) {
      if (value === count) return true
    }
    return false
  }

  private rankHistogram(): Map<Rank, number> {
    const histogram = new Map<Rank, number>()
    for (let i = 0; i < 5; i++) {
      const card = this.cards[i] as Card
      const count = histogram.get(card.rank) || 0
      histogram.set(card.rank, count + 1)
    }
    return histogram
  }
}
