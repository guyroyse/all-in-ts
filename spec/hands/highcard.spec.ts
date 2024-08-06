import { Card, Hand, Rank, Suit } from '$lib/poker'

describe('High Card', () => {
  let hand: Hand
  let winningHand: Hand
  let losingHand: Hand

  beforeEach(() => {
    hand = new Hand([
      new Card(Rank.KING, Suit.HEARTS),
      new Card(Rank.TWO, Suit.SPADES),
      new Card(Rank.FOUR, Suit.CLUBS),
      new Card(Rank.SIX, Suit.DIAMONDS),
      new Card(Rank.EIGHT, Suit.HEARTS)
    ])

    winningHand = new Hand([
      new Card(Rank.ACE, Suit.HEARTS),
      new Card(Rank.KING, Suit.SPADES),
      new Card(Rank.QUEEN, Suit.CLUBS),
      new Card(Rank.JACK, Suit.DIAMONDS),
      new Card(Rank.TEN, Suit.HEARTS)
    ])

    losingHand = new Hand([
      new Card(Rank.QUEEN, Suit.HEARTS),
      new Card(Rank.THREE, Suit.SPADES),
      new Card(Rank.FIVE, Suit.CLUBS),
      new Card(Rank.SEVEN, Suit.DIAMONDS),
      new Card(Rank.NINE, Suit.HEARTS)
    ])
  })

  it('wins against a lower high card', () => expect(hand.compareTo(losingHand)).toBePositive())
  it('loses against a higher high card', () => expect(hand.compareTo(winningHand)).toBeNegative())
})
