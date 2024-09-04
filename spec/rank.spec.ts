import { Rank } from '$lib/poker'

describe('Rank', () => {
  describe('#toString', () => {
    it('returns "2" for TWO', () => expect(Rank.TWO.toString()).toBe('2'))
    it('returns "3" for THREE', () => expect(Rank.THREE.toString()).toBe('3'))
    it('returns "4" for FOUR', () => expect(Rank.FOUR.toString()).toBe('4'))
    it('returns "5" for FIVE', () => expect(Rank.FIVE.toString()).toBe('5'))
    it('returns "6" for SIX', () => expect(Rank.SIX.toString()).toBe('6'))
    it('returns "7" for SEVEN', () => expect(Rank.SEVEN.toString()).toBe('7'))
    it('returns "8" for EIGHT', () => expect(Rank.EIGHT.toString()).toBe('8'))
    it('returns "9" for NINE', () => expect(Rank.NINE.toString()).toBe('9'))
    it('returns "10" for TEN', () => expect(Rank.TEN.toString()).toBe('10'))
    it('returns "J" for JACK', () => expect(Rank.JACK.toString()).toBe('J'))
    it('returns "Q" for QUEEN', () => expect(Rank.QUEEN.toString()).toBe('Q'))
    it('returns "K" for KING', () => expect(Rank.KING.toString()).toBe('K'))
    it('returns "A" for ACE', () => expect(Rank.ACE.toString()).toBe('A'))
  })
})
