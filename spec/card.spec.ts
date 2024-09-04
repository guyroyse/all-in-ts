import { Rank, Suit } from '$lib/poker'

describe('Card', () => {
  it('has a rank', () => expect(twoOfSpades.rank).toBe(Rank.TWO))
  it('has a suit', () => expect(twoOfSpades.suit).toBe(Suit.SPADES))

  describe('#toString', () => {
    it('combines rank and suit strings', () => expect(twoOfSpades.toString()).toBe('2♠'))
  })

  describe('#compare', () => {
    it('returns 0 for equal cards', () => expect(twoOfSpades.compare(twoOfSpades)).toBe(0))
    it('returns <0 for higher cards', () => expect(twoOfSpades.compare(aceOfSpades)).toBeLessThan(0))
    it('returns >0 for lower cards', () => expect(aceOfSpades.compare(twoOfSpades)).toBeGreaterThan(0))

    test('an Ace beats a King', () => expect(aceOfSpades.compare(kingOfSpades)).toBeGreaterThan(0))
    test('a King beats a Queen', () => expect(kingOfSpades.compare(queenOfSpades)).toBeGreaterThan(0))
    test('a Queen beats a Jack', () => expect(queenOfSpades.compare(jackOfSpades)).toBeGreaterThan(0))
    test('a Jack beats a Ten', () => expect(jackOfSpades.compare(tenOfSpades)).toBeGreaterThan(0))
    test('a Ten beats a Nine', () => expect(tenOfSpades.compare(nineOfSpades)).toBeGreaterThan(0))
    test('a Nine beats an Eight', () => expect(nineOfSpades.compare(eightOfSpades)).toBeGreaterThan(0))
    test('an Eight beats a Seven', () => expect(eightOfSpades.compare(sevenOfSpades)).toBeGreaterThan(0))
    test('a Seven beats a Six', () => expect(sevenOfSpades.compare(sixOfSpades)).toBeGreaterThan(0))
    test('a Six beats a Five', () => expect(sixOfSpades.compare(fiveOfSpades)).toBeGreaterThan(0))
    test('a Five beats a Four', () => expect(fiveOfSpades.compare(fourOfSpades)).toBeGreaterThan(0))
    test('a Four beats a Three', () => expect(fourOfSpades.compare(threeOfSpades)).toBeGreaterThan(0))
    test('a Three beats a Two', () => expect(threeOfSpades.compare(twoOfSpades)).toBeGreaterThan(0))
  })
})
