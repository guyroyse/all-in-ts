import { Ace, King, Queen, Jack, Ten, Nine, Eight, Seven, Six, Five, Four, Three, Two, Hand } from '$lib/poker'

describe('High Card', () => {
  let lowHand: Hand
  let highHand: Hand

  when('comparing identical hands', () => {
    beforeEach(() => {
      lowHand = new Hand([King.of.Hearts, Two.of.Spades, Four.of.Clubs, Six.of.Diamonds, Eight.of.Hearts])
      highHand = new Hand([King.of.Hearts, Two.of.Spades, Four.of.Clubs, Six.of.Diamonds, Eight.of.Hearts])
    })
    it('is a tie', () => expect(lowHand.compareTo(highHand)).toBeZero())
  })

  when('comparing hands with different high cards', () => {
    beforeEach(() => {
      lowHand = new Hand([King.of.Hearts, Two.of.Spades, Four.of.Clubs, Six.of.Diamonds, Eight.of.Hearts])
      highHand = new Hand([Ace.of.Hearts, King.of.Spades, Queen.of.Clubs, Jack.of.Diamonds, Ten.of.Hearts])
    })

    it('wins against a lower high card', () => expect(highHand.compareTo(lowHand)).toBePositive())
    it('loses against a higher high card', () => expect(lowHand.compareTo(highHand)).toBeNegative())
  })

  when('comparing hands with the same high card', () => {
    beforeEach(() => {
      lowHand = new Hand([King.of.Spades, Two.of.Spades, Four.of.Clubs, Six.of.Diamonds, Eight.of.Hearts])
      highHand = new Hand([King.of.Spades, Three.of.Clubs, Four.of.Diamonds, Six.of.Hearts, Eight.of.Spades])
    })

    it('wins against a lower high card', () => expect(highHand.compareTo(lowHand)).toBePositive())
    it('loses against a higher high card', () => expect(lowHand.compareTo(highHand)).toBeNegative())
  })
})
