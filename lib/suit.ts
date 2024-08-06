export class Suit {
  private constructor(
    readonly abbreviation: string,
    readonly value: number
  ) {}

  static CLUBS = new Suit('♣', 1)
  static DIAMONDS = new Suit('♦', 2)
  static HEARTS = new Suit('♥', 3)
  static SPADES = new Suit('♠', 4)

  toString() {
    return this.abbreviation
  }

  compareTo(that: Suit) {
    return this.value - that.value
  }
}
