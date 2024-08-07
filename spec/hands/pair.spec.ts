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

  when('comparing pairs with the same rank', () => {
    beforeEach(() => {
      lowHand = new Hand([Five.of.Hearts, Five.of.Diamonds, Four.of.Spades, Six.of.Spades, Eight.of.Spades])
      highHand = new Hand([Five.of.Clubs, Five.of.Spades, Four.of.Hearts, Six.of.Hearts, Eight.of.Hearts])
    })

    it('wins against a lower suit in the pair', () => expect(highHand.compareTo(lowHand)).toBePositive())
    it('loses against a higher suit in the pair', () => expect(lowHand.compareTo(highHand)).toBeNegative())
  })

  when('comparing pairs with different ranks', () => {
    beforeEach(() => {
      lowHand = new Hand([Queen.of.Hearts, Queen.of.Spades, Four.of.Clubs, Six.of.Diamonds, Eight.of.Hearts])
      highHand = new Hand([King.of.Hearts, King.of.Spades, Four.of.Clubs, Six.of.Diamonds, Eight.of.Hearts])
    })

    it('wins against a lower rank', () => expect(highHand.compareTo(lowHand)).toBePositive())
    it('loses against a higher rank', () => expect(lowHand.compareTo(highHand)).toBeNegative())
  })
})
