export enum Rank {
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  EIGHT,
  TEN,
  JACK,
  QUEEN,
  KING,
  ACE
}

export enum Suit {
  DIAMONDS,
  CLUBS,
  HEARTS,
  SPADES
}

type Card = [Rank, Suit]
export type Hand = [Card, Card, Card, Card, Card]

export function compare(hand1: Hand, hand2: Hand): number {
  const [leftRank] = hand1.sort(([a], [b]) => b - a)
  const [rightRank] = hand2.sort(([a], [b]) => b - a)

  const leftHistogram = buildHistogram(hand1).sort((a, b) => b - a)
  const rightHistogram = buildHistogram(hand2).sort((a, b) => b - a)

  if ((leftHistogram[0] ?? 0) > (rightHistogram[0] ?? 0)) return 1
  if ((leftHistogram[0] ?? 0) < (rightHistogram[0] ?? 0)) return -1

  if (leftRank > rightRank) {
    return -1
  } else {
    return 1
  }
}

function buildHistogram(hand: Hand): number[] {
  const histogram: number[] = []
  for (let card of hand) {
    const rank = card[0] as Rank
    histogram[rank] = (histogram[rank] ?? 0) + 1
  }
  return histogram
}
