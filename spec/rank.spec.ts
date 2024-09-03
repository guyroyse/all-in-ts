import { Rank } from '$lib/poker'

const rankTable = [
  { rank: Rank.ACE, name: 'Ace', symbol: 'A' },
  { rank: Rank.KING, name: 'King', symbol: 'K' },
  { rank: Rank.QUEEN, name: 'Queen', symbol: 'Q' },
  { rank: Rank.JACK, name: 'Jack', symbol: 'J' },
  { rank: Rank.TEN, name: 'Ten', symbol: '10' },
  { rank: Rank.NINE, name: 'Nine', symbol: '9' },
  { rank: Rank.EIGHT, name: 'Eight', symbol: '8' },
  { rank: Rank.SEVEN, name: 'Seven', symbol: '7' },
  { rank: Rank.SIX, name: 'Six', symbol: '6' },
  { rank: Rank.FIVE, name: 'Five', symbol: '5' },
  { rank: Rank.FOUR, name: 'Four', symbol: '4' },
  { rank: Rank.THREE, name: 'Three', symbol: '3' },
  { rank: Rank.TWO, name: 'Two', symbol: '2' }
]

const compareTable = [
  { winner: Rank.ACE, loser: Rank.KING },
  { winner: Rank.KING, loser: Rank.QUEEN },
  { winner: Rank.QUEEN, loser: Rank.JACK },
  { winner: Rank.JACK, loser: Rank.TEN },
  { winner: Rank.TEN, loser: Rank.NINE },
  { winner: Rank.NINE, loser: Rank.EIGHT },
  { winner: Rank.EIGHT, loser: Rank.SEVEN },
  { winner: Rank.SEVEN, loser: Rank.SIX },
  { winner: Rank.SIX, loser: Rank.FIVE },
  { winner: Rank.FIVE, loser: Rank.FOUR },
  { winner: Rank.FOUR, loser: Rank.THREE },
  { winner: Rank.THREE, loser: Rank.TWO }
]

describe('Rank', () => {
  describe('#name', () => {
    it.each(rankTable)('returns name for rank of $name', ({ rank, name }) => {
      expect(rank.name).toBe(name)
    })
  })

  describe(`#toString`, () => {
    it.each(rankTable)('returns $symbol for rank of $name', ({ rank, symbol }) => {
      expect(rank.toString()).toBe(symbol)
    })
  })

  describe(`#compareTo`, () => {
    when('the ranks are the same', () => {
      test.each(rankTable)('rank of $name is tied with itself', ({ rank }) => {
        expect(rank.compareTo(rank)).toBe(0)
      })
    })

    describe.each(compareTable)('when comparing $winner.name to $loser.name', ({ winner, loser }) => {
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
