import { Card } from './card'

enum HandRank {
  HIGH_CARD,
  PAIR,
  TWO_PAIR,
  THREE_OF_A_KIND
}

export class Hand {
  private cards: [Card, Card, Card, Card, Card]

  constructor(...cards: [Card, Card, Card, Card, Card]) {
    this.cards = cards.sort((a, b) => a.compareTo(b))
  }

  compareTo(that: Hand): number {
    return this.handRank - that.handRank
  }

  private get handRank(): HandRank {
    if (this.isThreeOfAKind()) return HandRank.THREE_OF_A_KIND
    if (this.isTwoPair()) return HandRank.TWO_PAIR
    if (this.isPair()) return HandRank.PAIR
    return HandRank.HIGH_CARD
  }

  private isThreeOfAKind(): boolean {
    return this.countTriplets() === 1
  }

  private isTwoPair(): boolean {
    return this.countPairs() === 2
  }

  private isPair(): boolean {
    return this.countPairs() === 1
  }

  private countPairs(): number {
    let pairs = 0
    for (let i = 0; i < this.cards.length - 1; i++) {
      const thisCard = this.cards[i] as Card
      const nextCard = this.cards[i + 1] as Card
      if (thisCard.compareTo(nextCard) === 0) pairs++
    }
    return pairs
  }

  private countTriplets(): number {
    let triplets = 0
    for (let i = 0; i < this.cards.length - 2; i++) {
      const thisCard = this.cards[i] as Card
      const nextCard = this.cards[i + 1] as Card
      const nextNextCard = this.cards[i + 2] as Card
      if (thisCard.compareTo(nextCard) === 0 && nextCard.compareTo(nextNextCard) === 0) triplets++
    }
    return triplets
  }
}
