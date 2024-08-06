import { Card, Rank, Suit } from '$lib/poker'

describe('Card', () => {
  let card: Card
  let greaterCard: Card
  let lesserCard: Card
  let equalCard: Card

  beforeEach(() => {
    card = new Card(Rank.QUEEN, Suit.HEARTS)
  })

  it('has a rank', () => expect(card.rank).toBe(Rank.QUEEN))
  it('has a suit', () => expect(card.suit).toBe(Suit.HEARTS))
  it('has a text representation', () => expect(card.toString()).toBe('Q♥'))

  when('comparing cards of differing ranks and matching suits', () => {
    beforeEach(() => {
      lesserCard = new Card(Rank.JACK, Suit.HEARTS)
      equalCard = new Card(Rank.QUEEN, Suit.HEARTS)
      greaterCard = new Card(Rank.KING, Suit.HEARTS)
    })

    it('is less than a greater card', () => expect(card.compareTo(greaterCard)).toBeNegative())
    it('is equal to itself', () => expect(card.compareTo(equalCard)).toBeZero())
    it('is greater than a lesser card', () => expect(card.compareTo(lesserCard)).toBePositive())
  })

  when('comparing cards of matching ranks and differing suits', () => {
    beforeEach(() => {
      lesserCard = new Card(Rank.QUEEN, Suit.CLUBS)
      equalCard = new Card(Rank.QUEEN, Suit.HEARTS)
      greaterCard = new Card(Rank.QUEEN, Suit.SPADES)
    })

    it('is less than a greater card', () => expect(card.compareTo(greaterCard)).toBeNegative())
    it('is equal to itself', () => expect(card.compareTo(equalCard)).toBeZero())
    it('is greater than a lesser card', () => expect(card.compareTo(lesserCard)).toBePositive())
  })

  when('comparing cards of differing ranks and suits', () => {
    beforeEach(() => {
      lesserCard = new Card(Rank.JACK, Suit.CLUBS)
      equalCard = new Card(Rank.QUEEN, Suit.HEARTS)
      greaterCard = new Card(Rank.KING, Suit.SPADES)
    })

    it('is less than a greater card', () => expect(card.compareTo(greaterCard)).toBeNegative())
    it('is equal to itself', () => expect(card.compareTo(equalCard)).toBeZero())
    it('is greater than a lesser card', () => expect(card.compareTo(lesserCard)).toBePositive())
  })
})
