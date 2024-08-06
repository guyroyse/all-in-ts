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

class CardBuilder {
  constructor(private rank: Rank) {}

  get of() {
    return this
  }

  get Spades() {
    return new Card(this.rank, Suit.HEARTS)
  }

  get Hearts() {
    return new Card(this.rank, Suit.HEARTS)
  }

  get Clubs() {
    return new Card(this.rank, Suit.CLUBS)
  }

  get Diamonds() {
    return new Card(this.rank, Suit.DIAMONDS)
  }
}

export const Ace = new CardBuilder(Rank.ACE)
export const King = new CardBuilder(Rank.KING)
export const Queen = new CardBuilder(Rank.QUEEN)
export const Jack = new CardBuilder(Rank.JACK)
export const Ten = new CardBuilder(Rank.TEN)
export const Nine = new CardBuilder(Rank.NINE)
export const Eight = new CardBuilder(Rank.EIGHT)
export const Seven = new CardBuilder(Rank.SEVEN)
export const Six = new CardBuilder(Rank.SIX)
export const Five = new CardBuilder(Rank.FIVE)
export const Four = new CardBuilder(Rank.FOUR)
export const Three = new CardBuilder(Rank.THREE)
export const Two = new CardBuilder(Rank.TWO)
