import { compare, Hand, Rank, Suit } from '$lib/poker'

describe('hand comparator', () => {
  let winner: Hand
  let loser: Hand

  test('an ace beats a king', () => {
    winner = [
      [Rank.ACE, Suit.SPADES],
      [Rank.JACK, Suit.CLUBS],
      [Rank.TEN, Suit.DIAMONDS],
      [Rank.EIGHT, Suit.HEARTS],
      [Rank.SIX, Suit.CLUBS]
    ]

    loser = [
      [Rank.KING, Suit.SPADES],
      [Rank.JACK, Suit.CLUBS],
      [Rank.TEN, Suit.DIAMONDS],
      [Rank.EIGHT, Suit.HEARTS],
      [Rank.SIX, Suit.CLUBS]
    ]

    expect(compare(winner, loser)).toBeGreaterThan(0)
    expect(compare(loser, winner)).toBeLessThan(0)
  })

  test('a pair beats a high card', () => {
    winner = [
      [Rank.QUEEN, Suit.HEARTS],
      [Rank.QUEEN, Suit.DIAMONDS],
      [Rank.TWO, Suit.CLUBS],
      [Rank.THREE, Suit.SPADES],
      [Rank.FIVE, Suit.DIAMONDS]
    ]

    loser = [
      [Rank.ACE, Suit.SPADES],
      [Rank.JACK, Suit.CLUBS],
      [Rank.TEN, Suit.DIAMONDS],
      [Rank.EIGHT, Suit.HEARTS],
      [Rank.SIX, Suit.CLUBS]
    ]

    expect(compare(winner, loser)).toBeGreaterThan(0)
    expect(compare(loser, winner)).toBeLessThan(0)
  })

  test('another pair beats a high card', () => {
    winner = [
      [Rank.FOUR, Suit.DIAMONDS],
      [Rank.TWO, Suit.CLUBS],
      [Rank.TWO, Suit.HEARTS],
      [Rank.THREE, Suit.SPADES],
      [Rank.FIVE, Suit.DIAMONDS]
    ]

    loser = [
      [Rank.ACE, Suit.SPADES],
      [Rank.JACK, Suit.CLUBS],
      [Rank.TEN, Suit.DIAMONDS],
      [Rank.EIGHT, Suit.HEARTS],
      [Rank.SIX, Suit.CLUBS]
    ]

    expect(compare(winner, loser)).toBeGreaterThan(0)
    expect(compare(loser, winner)).toBeLessThan(0)
  })
})
