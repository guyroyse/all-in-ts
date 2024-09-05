import { Suit } from '$lib/poker'

describe('Suit', () => {
  describe('#toString', () => {
    it('returns "♠" for SPADES', () => expect(Suit.SPADES.toString()).toEqual('♠'))
    it('returns "♣" for CLUBS', () => expect(Suit.CLUBS.toString()).toEqual('♣'))
    it('returns "♥" for HEARTS', () => expect(Suit.HEARTS.toString()).toEqual('♥'))
    it('returns "♦" for DIAMONDS', () => expect(Suit.DIAMONDS.toString()).toEqual('♦'))
  })
})
