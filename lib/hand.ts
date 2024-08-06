import { Card } from './card'

export class Hand {
  constructor(private cards: [Card, Card, Card, Card, Card]) {
    this.cards = cards.sort((a, b) => b.compareTo(a))
  }

  toString() {
    return this.cards.map(card => card.toString()).join(' ')
  }

  compareTo(that: Hand) {
    return this.cards[0].compareTo(that.cards[0])
  }
}
