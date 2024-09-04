import { Card } from '$lib/poker'

export {}

declare global {
  function when(description: string, fn: (this: any) => void): void
  function and(description: string, fn: (this: any) => void): void

  const aceOfSpades: Card
  const twoOfSpades: Card
  const threeOfSpades: Card
  const fourOfSpades: Card
  const fiveOfSpades: Card
  const sixOfSpades: Card
  const sevenOfSpades: Card
  const eightOfSpades: Card
  const nineOfSpades: Card
  const tenOfSpades: Card
  const jackOfSpades: Card
  const queenOfSpades: Card
  const kingOfSpades: Card
  const aceOfHearts: Card
  const twoOfHearts: Card
  const threeOfHearts: Card
  const fourOfHearts: Card
  const fiveOfHearts: Card
  const sixOfHearts: Card
  const sevenOfHearts: Card
  const eightOfHearts: Card
  const nineOfHearts: Card
  const tenOfHearts: Card
  const jackOfHearts: Card
  const queenOfHearts: Card
  const kingOfHearts: Card
  const aceOfDiamonds: Card
  const twoOfDiamonds: Card
  const threeOfDiamonds: Card
  const fourOfDiamonds: Card
  const fiveOfDiamonds: Card
  const sixOfDiamonds: Card
  const sevenOfDiamonds: Card
  const eightOfDiamonds: Card
  const nineOfDiamonds: Card
  const tenOfDiamonds: Card
  const jackOfDiamonds: Card
  const queenOfDiamonds: Card
  const kingOfDiamonds: Card
  const aceOfClubs: Card
  const twoOfClubs: Card
  const threeOfClubs: Card
  const fourOfClubs: Card
  const fiveOfClubs: Card
  const sixOfClubs: Card
  const sevenOfClubs: Card
  const eightOfClubs: Card
  const nineOfClubs: Card
  const tenOfClubs: Card
  const jackOfClubs: Card
  const queenOfClubs: Card
  const kingOfClubs: Card
}
