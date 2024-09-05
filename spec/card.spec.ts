import { Card, Rank, Suit } from '$lib/poker'

const suits = [Suit.CLUBS, Suit.DIAMONDS, Suit.HEARTS, Suit.SPADES]
const ranks = [
  Rank.TWO,
  Rank.THREE,
  Rank.FOUR,
  Rank.FIVE,
  Rank.SIX,
  Rank.SEVEN,
  Rank.EIGHT,
  Rank.NINE,
  Rank.TEN,
  Rank.JACK,
  Rank.QUEEN,
  Rank.KING,
  Rank.ACE
]

const twoOfSpades = new Card(Rank.TWO, Suit.SPADES)
const threeOfClubs = new Card(Rank.THREE, Suit.CLUBS)
const otherTwoOfSpades = new Card(Rank.TWO, Suit.SPADES)
const twoOfClubs = new Card(Rank.TWO, Suit.CLUBS)

describe('Card', () => {
  it('has a suit', () => expect(twoOfSpades.suit).toEqual(Suit.SPADES))
  it('has a rank', () => expect(twoOfSpades.rank).toEqual(Rank.TWO))

  describe('#toString', () => {
    it('combines rank and suit for the string', () => expect(twoOfSpades.toString()).toEqual('2♠'))
    it('combines other ranks and suits for the string', () => expect(threeOfClubs.toString()).toEqual('3♣'))

    describe.each(ranks)('combines %s and suit', rank => {
      test.each(suits)(`combines ${rank} and %s`, suit => {
        const card = new Card(rank, suit)
        expect(card.toString()).toEqual(rank + suit)
      })
    })
  })

  describe('#compare', () => {
    it('returns 0 when cards have the same rank', () => expect(twoOfSpades.compare(otherTwoOfSpades)).toEqual(0))
    it('returns 0 when cards of different suits have the same rank', () =>
      expect(twoOfSpades.compare(twoOfClubs)).toEqual(0))
    it('returns positive when this rank is higher than that rank', () =>
      expect(threeOfClubs.compare(twoOfSpades)).toBeGreaterThan(0))
    it('returns negative when this rank is lower than that rank', () =>
      expect(twoOfSpades.compare(threeOfClubs)).toBeLessThan(0))
  })
})
