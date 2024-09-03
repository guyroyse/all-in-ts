export class Suit {
  private constructor(
    private symbol: string,
    readonly name: string
  ) {}

  toString(): string {
    return this.symbol
  }

  static SPADES = new Suit('♠️', 'Spades')
  static HEARTS = new Suit('♥️', 'Hearts')
  static CLUBS = new Suit('♣️', 'Clubs')
  static DIAMONDS = new Suit('♦️', 'Diamonds')
}
