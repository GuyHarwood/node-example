'use strict'

/* global describe, it, expect */

describe('Current Time Service', () => {
  const sut = require('../../services/current-time')
  it('returns current time', () => {
    const time = sut.execute()
    expect(typeof(time)).toBe('string')
  })
})
