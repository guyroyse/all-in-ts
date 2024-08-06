import { Rank } from './rank'
import { Suit } from './suit'

export class Card {
  constructor(
    readonly rank: Rank,
    readonly suit: Suit
  ) {}

  toString() {
    return `${this.rank.abbreviation}${this.suit.abbreviation}`
  }

  compareTo(that: Card) {
    return this.rank.compareTo(that.rank) || this.suit.compareTo(that.suit)
  }
}
