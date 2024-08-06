import { Suit } from '$lib/poker'

describe('Suit', () => {
  describe('#CLUBS', () => {
    it('has the expected value', () => expect(Suit.CLUBS.value).toBe(1))
    it('has the expected string representation', () => expect(Suit.CLUBS.toString()).toBe('♣'))
    it('is equal to Clubs', () => expect(Suit.CLUBS.compareTo(Suit.CLUBS)).toBeZero())
    it('is less than Diamonds', () => expect(Suit.CLUBS.compareTo(Suit.DIAMONDS)).toBeNegative())
  })

  describe('#DIAMONDS', () => {
    it('has the expected value', () => expect(Suit.DIAMONDS.value).toBe(2))
    it('has the expected string representation', () => expect(Suit.DIAMONDS.toString()).toBe('♦'))
    it('is greater than Clubs', () => expect(Suit.DIAMONDS.compareTo(Suit.CLUBS)).toBePositive())
    it('is equal to Diamonds', () => expect(Suit.DIAMONDS.compareTo(Suit.DIAMONDS)).toBeZero())
    it('is less than Hearts', () => expect(Suit.DIAMONDS.compareTo(Suit.HEARTS)).toBeNegative())
  })

  describe('#HEARTS', () => {
    it('has the expected value', () => expect(Suit.HEARTS.value).toBe(3))
    it('has the expected string representation', () => expect(Suit.HEARTS.toString()).toBe('♥'))
    it('is greater than Diamonds', () => expect(Suit.HEARTS.compareTo(Suit.DIAMONDS)).toBePositive())
    it('is equal to Hearts', () => expect(Suit.HEARTS.compareTo(Suit.HEARTS)).toBeZero())
    it('is less than Spades', () => expect(Suit.HEARTS.compareTo(Suit.SPADES)).toBeNegative())
  })

  describe('#SPADES', () => {
    it('has the expected value', () => expect(Suit.SPADES.value).toBe(4))
    it('has the expected string representation', () => expect(Suit.SPADES.toString()).toBe('♠'))
    it('is greater than Hearts', () => expect(Suit.SPADES.compareTo(Suit.HEARTS)).toBePositive())
    it('is equal to Spades', () => expect(Suit.SPADES.compareTo(Suit.SPADES)).toBeZero())
  })
})
