import { Rank } from './rank'
import { Suit } from './suit'

export class Card {
  constructor(
    public rank: Rank,
    public suit: Suit
  ) {}

  toString(): string {
    return `${this.rank}${this.suit}`
  }

  compare(that: Card): number {
    return this.rank.compare(that.rank)
  }
}
