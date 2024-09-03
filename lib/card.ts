import { Rank } from './rank'
import { Suit } from './suit'

export class Card {
  constructor(
    private rank: Rank,
    private suit: Suit
  ) {}

  get name(): string {
    return `${this.rank.name} of ${this.suit.name}`
  }

  toString(): string {
    return `${this.rank.toString()}${this.suit.toString()}`
  }

  compareTo(that: Card): number {
    return this.rank.compareTo(that.rank)
  }
}
