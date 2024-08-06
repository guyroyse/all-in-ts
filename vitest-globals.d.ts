import 'vitest'

export {}

declare global {
  function when(description: string, fn: (this: any) => void): void
  function and(description: string, fn: (this: any) => void): void
}

interface CustomMatchers<R = unknown> {
  toBeNegative: () => R
  toBeZero: () => R
  toBePositive: () => R
  toBeTrue: () => R
  toBeFalse: () => R
}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
