import { Card, Rank, Suit } from '$lib/poker'

const aceOfSpades = new Card(Rank.ACE, Suit.SPADES)
const kingOfDiamonds = new Card(Rank.KING, Suit.DIAMONDS)
const queenOfHearts = new Card(Rank.QUEEN, Suit.HEARTS)
const jackOfClubs = new Card(Rank.JACK, Suit.CLUBS)
const tenOfSpades = new Card(Rank.TEN, Suit.SPADES)
const nineOfDiamonds = new Card(Rank.NINE, Suit.DIAMONDS)
const eightOfHearts = new Card(Rank.EIGHT, Suit.HEARTS)
const sevenOfClubs = new Card(Rank.SEVEN, Suit.CLUBS)
const sixOfSpades = new Card(Rank.SIX, Suit.SPADES)
const fiveOfDiamonds = new Card(Rank.FIVE, Suit.DIAMONDS)
const fourOfHearts = new Card(Rank.FOUR, Suit.HEARTS)
const threeOfClubs = new Card(Rank.THREE, Suit.CLUBS)
const twoOfSpades = new Card(Rank.TWO, Suit.SPADES)

const cardTable = [
  { card: aceOfSpades, name: 'Ace of Spades', symbol: 'A♠️' },
  { card: kingOfDiamonds, name: 'King of Diamonds', symbol: 'K♦️' },
  { card: queenOfHearts, name: 'Queen of Hearts', symbol: 'Q♥️' },
  { card: jackOfClubs, name: 'Jack of Clubs', symbol: 'J♣️' },
  { card: tenOfSpades, name: 'Ten of Spades', symbol: '10♠️' },
  { card: nineOfDiamonds, name: 'Nine of Diamonds', symbol: '9♦️' },
  { card: eightOfHearts, name: 'Eight of Hearts', symbol: '8♥️' },
  { card: sevenOfClubs, name: 'Seven of Clubs', symbol: '7♣️' },
  { card: sixOfSpades, name: 'Six of Spades', symbol: '6♠️' },
  { card: fiveOfDiamonds, name: 'Five of Diamonds', symbol: '5♦️' },
  { card: fourOfHearts, name: 'Four of Hearts', symbol: '4♥️' },
  { card: threeOfClubs, name: 'Three of Clubs', symbol: '3♣️' },
  { card: twoOfSpades, name: 'Two of Spades', symbol: '2♠️' }
]

const compareTable = [
  { winner: aceOfSpades, loser: kingOfDiamonds },
  { winner: kingOfDiamonds, loser: queenOfHearts },
  { winner: queenOfHearts, loser: jackOfClubs },
  { winner: jackOfClubs, loser: tenOfSpades },
  { winner: tenOfSpades, loser: nineOfDiamonds },
  { winner: nineOfDiamonds, loser: eightOfHearts },
  { winner: eightOfHearts, loser: sevenOfClubs },
  { winner: sevenOfClubs, loser: sixOfSpades },
  { winner: sixOfSpades, loser: fiveOfDiamonds },
  { winner: fiveOfDiamonds, loser: fourOfHearts },
  { winner: fourOfHearts, loser: threeOfClubs },
  { winner: threeOfClubs, loser: twoOfSpades }
]

describe('Card', () => {
  describe('#name', () => {
    it.each(cardTable)('returns name for the $name', ({ card, name }) => {
      expect(card.name).toBe(name)
    })
  })

  describe(`#toString`, () => {
    it.each(cardTable)('returns $symbol for the $name', ({ card, symbol }) => {
      expect(card.toString()).toBe(symbol)
    })
  })

  describe(`#compareTo`, () => {
    when('the card ranks are the same', () => {
      test.each(cardTable)('$card.name is tied with itself', ({ card }) => {
        expect(card.compareTo(card)).toBe(0)
      })
    })

    describe.each(compareTable)('when comparing winner $winner.name to loser $loser.name', ({ winner, loser }) => {
      test('the winner beats the loser', () => {
        expect(winner.compareTo(loser)).toBeGreaterThan(0)
      })

      test('the loser does not beat the winner', () => {
        expect(loser.compareTo(winner)).toBeLessThan(0)
      })

      test('the winner and loser are not tied', () => {
        expect(winner.compareTo(loser)).not.toBe(0)
      })
    })
  })
})
