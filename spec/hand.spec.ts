import { Card, Hand, Rank, Suit } from '$lib/poker'

const aceOfSpades = new Card(Rank.ACE, Suit.SPADES)
const aceOfClubs = new Card(Rank.ACE, Suit.CLUBS)

const kingOfHearts = new Card(Rank.KING, Suit.HEARTS)
const kingOfDiamonds = new Card(Rank.KING, Suit.DIAMONDS)
const kingOfClubs = new Card(Rank.KING, Suit.CLUBS)

const eightOfClubs = new Card(Rank.EIGHT, Suit.CLUBS)
const sixOfDiamonds = new Card(Rank.SIX, Suit.DIAMONDS)
const fourOfHearts = new Card(Rank.FOUR, Suit.HEARTS)
const twoOfSpades = new Card(Rank.TWO, Suit.SPADES)

const highCard = new Hand(aceOfSpades, eightOfClubs, sixOfDiamonds, fourOfHearts, twoOfSpades)
const pair = new Hand(kingOfHearts, kingOfDiamonds, sixOfDiamonds, fourOfHearts, twoOfSpades)
const twoPairs = new Hand(kingOfHearts, kingOfDiamonds, aceOfClubs, aceOfSpades, twoOfSpades)
const threeOfAKind = new Hand(kingOfHearts, kingOfDiamonds, kingOfClubs, fourOfHearts, twoOfSpades)

describe('Hand', () => {
  test('identical high cards tie', () => {
    expect(highCard.compareTo(highCard)).toBe(0)
  })

  test('identical pairs tie', () => {
    expect(pair.compareTo(pair)).toBe(0)
  })

  test('identical two pairs tie', () => {
    expect(twoPairs.compareTo(twoPairs)).toBe(0)
  })

  test('pair beats a high card', () => {
    expect(pair.compareTo(highCard)).toBeGreaterThan(0)
    expect(highCard.compareTo(pair)).toBeLessThan(0)
  })

  test('two pairs beats a pair', () => {
    expect(twoPairs.compareTo(pair)).toBeGreaterThan(0)
    expect(pair.compareTo(twoPairs)).toBeLessThan(0)
  })

  test('three of a kind beats two pair', () => {
    expect(threeOfAKind.compareTo(twoPairs)).toBeGreaterThan(0)
    expect(twoPairs.compareTo(threeOfAKind)).toBeLessThan(0)
  })
})
