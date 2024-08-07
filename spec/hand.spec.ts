import { Ace, King, Queen, Jack, Ten, Nine, Eight, Seven, Six, Five, Four, Three, Two } from '$lib/poker'
import { Hand, HandRank } from '$lib/poker'

describe('Hand', () => {
  let unsortedHand: Hand
  let highCard: Hand
  let pair: Hand
  let twoPair: Hand
  let threeOfAKind: Hand
  let straightAceHigh: Hand
  let straightAceLow: Hand
  let flush: Hand
  let fullHouse: Hand
  let fourOfAKind: Hand
  let straightFlush: Hand
  let aceLowStraightFlush: Hand
  let royalFlush: Hand
  let fiveOfAKind: Hand

  beforeEach(() => {
    unsortedHand = new Hand([Ten.of.Hearts, Jack.of.Diamonds, Queen.of.Clubs, King.of.Spades, Ace.of.Hearts])
    highCard = new Hand([Ace.of.Hearts, Queen.of.Clubs, Jack.of.Diamonds, Ten.of.Hearts, Eight.of.Spades])
    pair = new Hand([King.of.Spades, Eight.of.Spades, Eight.of.Hearts, Six.of.Diamonds, Four.of.Clubs])
    twoPair = new Hand([King.of.Spades, Eight.of.Spades, Eight.of.Hearts, Six.of.Diamonds, Six.of.Clubs])
    threeOfAKind = new Hand([King.of.Spades, Eight.of.Spades, Eight.of.Hearts, Eight.of.Diamonds, Six.of.Clubs])
    straightAceHigh = new Hand([Ace.of.Hearts, King.of.Spades, Queen.of.Clubs, Jack.of.Diamonds, Ten.of.Hearts])
    straightAceLow = new Hand([Ace.of.Hearts, Two.of.Spades, Three.of.Clubs, Four.of.Diamonds, Five.of.Hearts])
    flush = new Hand([Ace.of.Hearts, Queen.of.Hearts, Ten.of.Hearts, Eight.of.Hearts, Six.of.Hearts])
    fullHouse = new Hand([King.of.Spades, King.of.Hearts, King.of.Diamonds, Six.of.Clubs, Six.of.Hearts])
    fourOfAKind = new Hand([King.of.Spades, King.of.Hearts, King.of.Diamonds, King.of.Clubs, Six.of.Hearts])
    straightFlush = new Hand([Ten.of.Hearts, Nine.of.Hearts, Eight.of.Hearts, Seven.of.Hearts, Six.of.Hearts])
    aceLowStraightFlush = new Hand([Five.of.Hearts, Four.of.Hearts, Three.of.Hearts, Two.of.Hearts, Ace.of.Hearts])
    royalFlush = new Hand([Ace.of.Hearts, King.of.Hearts, Queen.of.Hearts, Jack.of.Hearts, Ten.of.Hearts])
    fiveOfAKind = new Hand([King.of.Spades, King.of.Hearts, King.of.Hearts, King.of.Diamonds, King.of.Clubs])
  })

  describe('#toString', () => {
    it('has a sorted text representation', () => expect(unsortedHand.toString()).toBe('A♥ K♠ Q♣ J♦ 10♥'))
  })

  it('identifies a high card', () => expect(highCard.rank).toBe(HandRank.HIGH_CARD))
  it('identifies a pair', () => expect(pair.rank).toBe(HandRank.PAIR))
  it('identifies two pair', () => expect(twoPair.rank).toBe(HandRank.TWO_PAIR))
  it('identifies three of a kind', () => expect(threeOfAKind.rank).toBe(HandRank.THREE_OF_A_KIND))
  it('identifies a straight ace high', () => expect(straightAceHigh.rank).toBe(HandRank.STRAIGHT))
  it('identifies a straight ace low', () => expect(straightAceLow.rank).toBe(HandRank.STRAIGHT))
  it('identifies a flush', () => expect(flush.rank).toBe(HandRank.FLUSH))
  it('identifies a full house', () => expect(fullHouse.rank).toBe(HandRank.FULL_HOUSE))
  it('identifies four of a kind', () => expect(fourOfAKind.rank).toBe(HandRank.FOUR_OF_A_KIND))
  it('identifies a straight flush', () => expect(straightFlush.rank).toBe(HandRank.STRAIGHT_FLUSH))
  it('identifies an ace low straight flush', () => expect(aceLowStraightFlush.rank).toBe(HandRank.STRAIGHT_FLUSH))
  it('identifies a royal flush', () => expect(royalFlush.rank).toBe(HandRank.ROYAL_FLUSH))
  it('identifies five of a kind', () => expect(fiveOfAKind.rank).toBe(HandRank.FIVE_OF_A_KIND))

  test('a pair beats high card', () => expect(pair.compareTo(highCard)).toBePositive())
  test('two pair beats pair', () => expect(twoPair.compareTo(pair)).toBePositive())
  test('three of a kind beats two pair', () => expect(threeOfAKind.compareTo(twoPair)).toBePositive())
  test('straight three of a kind', () => expect(straightAceHigh.compareTo(threeOfAKind)).toBePositive())
  test('flush beats straight', () => expect(flush.compareTo(straightAceHigh)).toBePositive())
  test('full house beats flush', () => expect(fullHouse.compareTo(flush)).toBePositive())
  test('four of a kind beats full house', () => expect(fourOfAKind.compareTo(fullHouse)).toBePositive())
  test('straight flush beats four of a kind', () => expect(straightFlush.compareTo(fourOfAKind)).toBePositive())
  test('royal flush beats straight flush', () => expect(royalFlush.compareTo(straightFlush)).toBePositive())
  test('five of a kind beats royal flush', () => expect(fiveOfAKind.compareTo(royalFlush)).toBePositive())
})
