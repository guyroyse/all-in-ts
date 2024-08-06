import { Card, Hand, Rank, Suit } from '$lib/poker'

describe('Hand', () => {
  let hand: Hand

  when('hand is sorted', () => {
    beforeEach(() => {
      hand = new Hand([
        new Card(Rank.ACE, Suit.HEARTS),
        new Card(Rank.KING, Suit.SPADES),
        new Card(Rank.QUEEN, Suit.CLUBS),
        new Card(Rank.JACK, Suit.DIAMONDS),
        new Card(Rank.TEN, Suit.HEARTS)
      ])
    })

    it('has a text representation', () => expect(hand.toString()).toBe('A♥ K♠ Q♣ J♦ 10♥'))
  })

  when('hand is unsorted', () => {
    beforeEach(() => {
      hand = new Hand([
        new Card(Rank.TEN, Suit.HEARTS),
        new Card(Rank.ACE, Suit.HEARTS),
        new Card(Rank.JACK, Suit.DIAMONDS),
        new Card(Rank.KING, Suit.SPADES),
        new Card(Rank.QUEEN, Suit.CLUBS)
      ])
    })

    it('has a sorted text representation', () => expect(hand.toString()).toBe('A♥ K♠ Q♣ J♦ 10♥'))
  })
})
