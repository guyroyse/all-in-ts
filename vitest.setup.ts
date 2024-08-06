export function when(description: string, fn: (this: any) => void): void {
  describe(`when ${description}`, fn)
}

export function and(description: string, fn: (this: any) => void): void {
  describe(`and ${description}`, fn)
}

;(global as any).when = when
;(global as any).and = and

expect.extend({
  toBeNegative(received) {
    const { isNot } = this
    const result = {
      pass: received < 0,
      message: () => `${received} is${isNot ? ' not' : ''} negative`
    }
    return result
  },
  toBeZero(received) {
    const { isNot } = this
    const result = {
      pass: received === 0,
      message: () => `${received} is${isNot ? ' not' : ''} zero`
    }
    return result
  },
  toBePositive(received) {
    const { isNot } = this
    const result = {
      pass: received > 0,
      message: () => `${received} is${isNot ? ' not' : ''} positive`
    }
    return result
  },
  toBeTrue(received) {
    const { isNot } = this
    const result = {
      pass: received === true,
      message: () => `${received} is${isNot ? ' not' : ''} true`
    }
    return result
  },
  toBeFalse(received) {
    const { isNot } = this
    const result = {
      pass: received === false,
      message: () => `${received} is${isNot ? ' not' : ''} false`
    }
    return result
  }
})
