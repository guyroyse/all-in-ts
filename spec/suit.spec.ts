import { Suit } from '$lib/poker'

describe('Suit', () => {
  describe('#toString', () => {
    it('returns "♠" for SPADES', () => expect(Suit.SPADES.toString()).toBe('♠'))
    it('returns "♥" for HEARTS', () => expect(Suit.HEARTS.toString()).toBe('♥'))
    it('returns "♦" for DIAMONDS', () => expect(Suit.DIAMONDS.toString()).toBe('♦'))
    it('returns "♣" for CLUBS', () => expect(Suit.CLUBS.toString()).toBe('♣'))
  })
})
