export enum Suit {
  SPADES = '♠',
  CLUBS = '♣',
  HEARTS = '♥',
  DIAMONDS = '♦'
}

export class Rank {
  private constructor(
    readonly value: number,
    readonly symbol: string
  ) {}

  static TWO = new Rank(2, '2')
  static THREE = new Rank(3, '3')
  static FOUR = new Rank(4, '4')
  static FIVE = new Rank(5, '5')
  static SIX = new Rank(6, '6')
  static SEVEN = new Rank(7, '7')
  static EIGHT = new Rank(8, '8')
  static NINE = new Rank(9, '9')
  static TEN = new Rank(10, '10')
  static JACK = new Rank(11, 'J')
  static QUEEN = new Rank(12, 'Q')
  static KING = new Rank(13, 'K')
  static ACE = new Rank(14, 'A')

  toString(): string {
    return this.symbol
  }

  compare(that: Rank): number {
    return this.value - that.value
  }
}

export class Card {
  constructor(
    readonly rank: Rank,
    readonly suit: Suit
  ) {}

  toString(): string {
    return `${this.rank}${this.suit}`
  }

  compare(that: Card): number {
    return this.rank.compare(that.rank)
  }
}
