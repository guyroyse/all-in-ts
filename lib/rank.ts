export class Rank {
  private constructor(
    private symbol: string,
    private value: number,
    readonly name: string
  ) {}

  static ACE = new Rank('A', 14, 'Ace')
  static KING = new Rank('K', 13, 'King')
  static QUEEN = new Rank('Q', 12, 'Queen')
  static JACK = new Rank('J', 11, 'Jack')
  static TEN = new Rank('10', 10, 'Ten')
  static NINE = new Rank('9', 9, 'Nine')
  static EIGHT = new Rank('8', 8, 'Eight')
  static SEVEN = new Rank('7', 7, 'Seven')
  static SIX = new Rank('6', 6, 'Six')
  static FIVE = new Rank('5', 5, 'Five')
  static FOUR = new Rank('4', 4, 'Four')
  static THREE = new Rank('3', 3, 'Three')
  static TWO = new Rank('2', 2, 'Two')

  toString(): string {
    return this.symbol
  }

  compareTo(that: Rank): number {
    return this.value - that.value
  }
}
