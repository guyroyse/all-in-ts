import { Ace, King, Queen, Jack, Ten, Nine, Eight, Seven, Six, Five, Four, Three, Two } from '$lib/poker'
import { Hand } from '$lib/poker'

describe('Pair', () => {
  let lowHand: Hand
  let highHand: Hand

  when('comparing identical pairs', () => {
    beforeEach(() => {
      lowHand = new Hand([King.of.Hearts, King.of.Spades, Four.of.Clubs, Six.of.Diamonds, Eight.of.Hearts])
      highHand = new Hand([King.of.Hearts, King.of.Spades, Four.of.Clubs, Six.of.Diamonds, Eight.of.Hearts])
    })
    it('is a tie', () => expect(lowHand.compareTo(highHand)).toBeZero())
  })
})
