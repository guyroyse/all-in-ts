import { Rank } from '$lib/poker'

describe('Rank', () => {
  describe('#toString', () => {
    it('returns "2" for TWO', () => expect(Rank.TWO.toString()).toEqual('2'))
    it('returns "3" for THREE', () => expect(Rank.THREE.toString()).toEqual('3'))
    it('returns "4" for FOUR', () => expect(Rank.FOUR.toString()).toEqual('4'))
    it('returns "5" for FIVE', () => expect(Rank.FIVE.toString()).toEqual('5'))
    it('returns "6" for SIX', () => expect(Rank.SIX.toString()).toEqual('6'))
    it('returns "7" for SEVEN', () => expect(Rank.SEVEN.toString()).toEqual('7'))
    it('returns "8" for EIGHT', () => expect(Rank.EIGHT.toString()).toEqual('8'))
    it('returns "9" for NINE', () => expect(Rank.NINE.toString()).toEqual('9'))
    it('returns "10" for TEN', () => expect(Rank.TEN.toString()).toEqual('10'))
    it('returns "J" for JACK', () => expect(Rank.JACK.toString()).toEqual('J'))
    it('returns "Q" for QUEEN', () => expect(Rank.QUEEN.toString()).toEqual('Q'))
    it('returns "K" for KING', () => expect(Rank.KING.toString()).toEqual('K'))
    it('returns "A" for ACE', () => expect(Rank.ACE.toString()).toEqual('A'))
  })
})
