'use strict'

/* global describe, it, expect */

describe('UTC Offset Library', () => {
  const { parseOffset, OffsetFormatError } = require('../../lib/utc-offset')

  it('parsing +14:00 should spit out 840', () => {
    expect(parseOffset('+14:00')).toBe(840)
  })

  it('parsing -12:00 should spit out -720', () => {
    expect(parseOffset('-12:00')).toBe(-720)
  })

  it('parsing +00:00 should spit out 0', () => {
    expect(parseOffset('+00:00')).toBe(0)
  })

  it('parsing -00:00 should spit out 0', () => {
    expect(parseOffset('-00:00')).toBe(0)
  })

  it('throws if passed an invalid UTC offset', () => {
    expect(() => parseOffset('bad offset')).toThrowError(OffsetFormatError)
  })

  it('throws if passed an out of range positive UTC offset', () => {
    expect(() => parseOffset('+14:01')).toThrowError(OffsetFormatError)
  })

  it('throws if passed an out of range negative UTC offset', () => {
    expect(() => parseOffset('-12:01')).toThrowError(OffsetFormatError)
  })
})
