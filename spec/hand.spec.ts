import { Hand } from '$lib/poker'

const hand = new Hand(fourOfClubs, twoOfDiamonds, aceOfSpades, queenOfClubs, kingOfHearts)

const highCard = new Hand(aceOfSpades, twoOfDiamonds, threeOfClubs, fourOfHearts, sixOfSpades)
const pair = new Hand(threeOfDiamonds, aceOfDiamonds, threeOfClubs, fourOfHearts, sixOfSpades)
const twoPair = new Hand(threeOfDiamonds, aceOfDiamonds, fourOfClubs, fourOfHearts, threeOfSpades)
const threeOfAKind = new Hand(threeOfDiamonds, aceOfDiamonds, threeOfClubs, threeOfHearts, sixOfSpades)
const straight = new Hand(twoOfDiamonds, threeOfClubs, fourOfHearts, fiveOfSpades, sixOfDiamonds)
const flush = new Hand(twoOfDiamonds, kingOfDiamonds, fourOfDiamonds, fiveOfDiamonds, nineOfDiamonds)
const fullHouse = new Hand(threeOfDiamonds, aceOfDiamonds, threeOfClubs, aceOfHearts, threeOfSpades)
const fourOfAKind = new Hand(threeOfDiamonds, aceOfDiamonds, threeOfClubs, threeOfHearts, threeOfSpades)
const straightFlush = new Hand(twoOfDiamonds, threeOfDiamonds, fourOfDiamonds, fiveOfDiamonds, sixOfDiamonds)
const fiveOfAKind = new Hand(threeOfDiamonds, threeOfClubs, threeOfHearts, threeOfSpades, threeOfDiamonds)

describe('Hand', () => {
  it('has exactly five cards', () => expect(hand.cards.length).toBe(5))

  it('sorts the cards by rank descending', () => {
    expect(hand.cards[0]).toBe(aceOfSpades)
    expect(hand.cards[1]).toBe(kingOfHearts)
    expect(hand.cards[2]).toBe(queenOfClubs)
    expect(hand.cards[3]).toBe(fourOfClubs)
    expect(hand.cards[4]).toBe(twoOfDiamonds)
  })

  describe('#compare', () => {
    it('returns 0 for identical hands', () => expect(highCard.compare(highCard)).toBe(0))

    test('pair beats high card', () => expect(pair.compare(highCard)).toBeGreaterThan(0))
    test('high card loses to pair', () => expect(highCard.compare(pair)).toBeLessThan(0))

    test('two pair beats pair', () => expect(twoPair.compare(pair)).toBeGreaterThan(0))
    test('pair loses to two pair', () => expect(pair.compare(twoPair)).toBeLessThan(0))

    test('three of a kind beats two pair', () => expect(threeOfAKind.compare(twoPair)).toBeGreaterThan(0))
    test('two pair loses to three of a kind', () => expect(twoPair.compare(threeOfAKind)).toBeLessThan(0))

    test('straight beats three of a kind', () => expect(straight.compare(threeOfAKind)).toBeGreaterThan(0))
    test('three of a kind loses to straight', () => expect(threeOfAKind.compare(straight)).toBeLessThan(0))

    test('flush beats straight', () => expect(flush.compare(straight)).toBeGreaterThan(0))
    test('straight loses to flush', () => expect(straight.compare(flush)).toBeLessThan(0))

    test('full house beats flush', () => expect(fullHouse.compare(flush)).toBeGreaterThan(0))
    test('flush loses to full house', () => expect(flush.compare(fullHouse)).toBeLessThan(0))

    test('four of a kind beats full house', () => expect(fourOfAKind.compare(fullHouse)).toBeGreaterThan(0))
    test('full house loses to four of a kind', () => expect(fullHouse.compare(fourOfAKind)).toBeLessThan(0))

    test('straight flush beats four of a kind', () => expect(straightFlush.compare(fourOfAKind)).toBeGreaterThan(0))
    test('four of a kind loses to straight flush', () => expect(fourOfAKind.compare(straightFlush)).toBeLessThan(0))

    test('five of a kind beats straight flush', () => expect(fiveOfAKind.compare(straightFlush)).toBeGreaterThan(0))
    test('straight flush loses to five of a kind', () => expect(straightFlush.compare(fiveOfAKind)).toBeLessThan(0))
  })
})
