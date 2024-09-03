import { Suit } from '$lib/poker'

const suitTable = [
  { suit: Suit.SPADES, name: 'Spades', symbol: '♠️' },
  { suit: Suit.HEARTS, name: 'Hearts', symbol: '♥️' },
  { suit: Suit.CLUBS, name: 'Clubs', symbol: '♣️' },
  { suit: Suit.DIAMONDS, name: 'Diamonds', symbol: '♦️' }
]

describe('Suit', () => {
  describe('#name', () => {
    it.each(suitTable)('returns name for suit for $name', ({ suit, name }) => {
      expect(suit.name).toBe(name)
    })
  })

  describe(`#toString`, () => {
    it.each(suitTable)('returns $symbol for suit of $name', ({ suit, symbol }) => {
      expect(suit.toString()).toBe(symbol)
    })
  })
})
