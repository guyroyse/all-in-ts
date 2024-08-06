import { Rank } from '$lib/poker'

describe('Rank', () => {
  describe('#TWO', () => {
    it('has the expected value', () => expect(Rank.TWO.value).toBe(2))
    it('has the expected string representation', () => expect(Rank.TWO.toString()).toBe('2'))
    it('is equal to Two', () => expect(Rank.TWO.compareTo(Rank.TWO)).toBeZero())
    it('is less than Three', () => expect(Rank.TWO.compareTo(Rank.THREE)).toBeNegative())
  })

  describe('#THREE', () => {
    it('has the expected value', () => expect(Rank.THREE.value).toBe(3))
    it('has the expected string representation', () => expect(Rank.THREE.toString()).toBe('3'))
    it('is greater than Two', () => expect(Rank.THREE.compareTo(Rank.TWO)).toBePositive())
    it('is equal to Three', () => expect(Rank.THREE.compareTo(Rank.THREE)).toBeZero())
    it('is less than Four', () => expect(Rank.THREE.compareTo(Rank.FOUR)).toBeNegative())
  })

  describe('#FOUR', () => {
    it('has the expected value', () => expect(Rank.FOUR.value).toBe(4))
    it('has the expected string representation', () => expect(Rank.FOUR.toString()).toBe('4'))
    it('is greater than Three', () => expect(Rank.FOUR.compareTo(Rank.THREE)).toBePositive())
    it('is equal to Four', () => expect(Rank.FOUR.compareTo(Rank.FOUR)).toBeZero())
    it('is less than Five', () => expect(Rank.FOUR.compareTo(Rank.FIVE)).toBeNegative())
  })

  describe('#FIVE', () => {
    it('has the expected value', () => expect(Rank.FIVE.value).toBe(5))
    it('has the expected string representation', () => expect(Rank.FIVE.toString()).toBe('5'))
    it('is greater than Four', () => expect(Rank.FIVE.compareTo(Rank.FOUR)).toBePositive())
    it('is equal to Five', () => expect(Rank.FIVE.compareTo(Rank.FIVE)).toBeZero())
    it('is less than Six', () => expect(Rank.FIVE.compareTo(Rank.SIX)).toBeNegative())
  })

  describe('#SIX', () => {
    it('has the expected value', () => expect(Rank.SIX.value).toBe(6))
    it('has the expected string representation', () => expect(Rank.SIX.toString()).toBe('6'))
    it('is greater than Five', () => expect(Rank.SIX.compareTo(Rank.FIVE)).toBePositive())
    it('is equal to Six', () => expect(Rank.SIX.compareTo(Rank.SIX)).toBeZero())
    it('is less than Seven', () => expect(Rank.SIX.compareTo(Rank.SEVEN)).toBeNegative())
  })

  describe('#SEVEN', () => {
    it('has the expected value', () => expect(Rank.SEVEN.value).toBe(7))
    it('has the expected string representation', () => expect(Rank.SEVEN.toString()).toBe('7'))
    it('is greater than Six', () => expect(Rank.SEVEN.compareTo(Rank.SIX)).toBePositive())
    it('is equal to Seven', () => expect(Rank.SEVEN.compareTo(Rank.SEVEN)).toBeZero())
    it('is less than Eight', () => expect(Rank.SEVEN.compareTo(Rank.EIGHT)).toBeNegative())
  })

  describe('#EIGHT', () => {
    it('has the expected value', () => expect(Rank.EIGHT.value).toBe(8))
    it('has the expected string representation', () => expect(Rank.EIGHT.toString()).toBe('8'))
    it('is greater than Seven', () => expect(Rank.EIGHT.compareTo(Rank.SEVEN)).toBePositive())
    it('is equal to Eight', () => expect(Rank.EIGHT.compareTo(Rank.EIGHT)).toBeZero())
    it('is less than Nine', () => expect(Rank.EIGHT.compareTo(Rank.NINE)).toBeNegative())
  })

  describe('#NINE', () => {
    it('has the expected value', () => expect(Rank.NINE.value).toBe(9))
    it('has the expected string representation', () => expect(Rank.NINE.toString()).toBe('9'))
    it('is greater than Eight', () => expect(Rank.NINE.compareTo(Rank.EIGHT)).toBePositive())
    it('is equal to Nine', () => expect(Rank.NINE.compareTo(Rank.NINE)).toBeZero())
    it('is less than Ten', () => expect(Rank.NINE.compareTo(Rank.TEN)).toBeNegative())
  })

  describe('#TEN', () => {
    it('has the expected value', () => expect(Rank.TEN.value).toBe(10))
    it('has the expected string representation', () => expect(Rank.TEN.toString()).toBe('10'))
    it('is greater than Nine', () => expect(Rank.TEN.compareTo(Rank.NINE)).toBePositive())
    it('is equal to Ten', () => expect(Rank.TEN.compareTo(Rank.TEN)).toBeZero())
    it('is less than Jack', () => expect(Rank.TEN.compareTo(Rank.JACK)).toBeNegative())
  })

  describe('#JACK', () => {
    it('has the expected value', () => expect(Rank.JACK.value).toBe(11))
    it('has the expected string representation', () => expect(Rank.JACK.toString()).toBe('J'))
    it('is greater than Ten', () => expect(Rank.JACK.compareTo(Rank.TEN)).toBePositive())
    it('is equal to Jack', () => expect(Rank.JACK.compareTo(Rank.JACK)).toBeZero())
    it('is less than Queen', () => expect(Rank.JACK.compareTo(Rank.QUEEN)).toBeNegative())
  })

  describe('#QUEEN', () => {
    it('has the expected value', () => expect(Rank.QUEEN.value).toBe(12))
    it('has the expected string representation', () => expect(Rank.QUEEN.toString()).toBe('Q'))
    it('is greater than Jack', () => expect(Rank.QUEEN.compareTo(Rank.JACK)).toBePositive())
    it('is equal to Queen', () => expect(Rank.QUEEN.compareTo(Rank.QUEEN)).toBeZero())
    it('is less than King', () => expect(Rank.QUEEN.compareTo(Rank.KING)).toBeNegative())
  })

  describe('#KING', () => {
    it('has the expected value', () => expect(Rank.KING.value).toBe(13))
    it('has the expected string representation', () => expect(Rank.KING.toString()).toBe('K'))
    it('is greater than Queen', () => expect(Rank.KING.compareTo(Rank.QUEEN)).toBePositive())
    it('is equal to King', () => expect(Rank.KING.compareTo(Rank.KING)).toBeZero())
    it('is less than Ace', () => expect(Rank.KING.compareTo(Rank.ACE)).toBeNegative())
  })

  describe('#ACE', () => {
    it('has the expected value', () => expect(Rank.ACE.value).toBe(14))
    it('has the expected string representation', () => expect(Rank.ACE.toString()).toBe('A'))
    it('is greater than King', () => expect(Rank.ACE.compareTo(Rank.KING)).toBePositive())
    it('is equal to Ace', () => expect(Rank.ACE.compareTo(Rank.ACE)).toBeZero())
  })
})
