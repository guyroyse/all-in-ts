export class Rank {
  private constructor(
    readonly abbreviation: string,
    readonly value: number
  ) {}

  static TWO = new Rank('2', 2)
  static THREE = new Rank('3', 3)
  static FOUR = new Rank('4', 4)
  static FIVE = new Rank('5', 5)
  static SIX = new Rank('6', 6)
  static SEVEN = new Rank('7', 7)
  static EIGHT = new Rank('8', 8)
  static NINE = new Rank('9', 9)
  static TEN = new Rank('10', 10)
  static JACK = new Rank('J', 11)
  static QUEEN = new Rank('Q', 12)
  static KING = new Rank('K', 13)
  static ACE = new Rank('A', 14)

  toString() {
    return this.abbreviation
  }

  compareTo(that: Rank) {
    return this.value - that.value
  }
}
