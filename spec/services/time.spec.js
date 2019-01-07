'use strict'

/* global describe, it, expect */

describe('Time Service', () => {
  const time = require('../../services/time')

  beforeEach(() => {
    const expectedDate = new Date(2019, 0, 6, 23, 56)
    jasmine.clock().install()
    jasmine.clock().mockDate(expectedDate)
  })

  afterEach(() => {
    jasmine.clock().uninstall()
  })

  it('returns current time in UTC', () => {
    expect(time.getCurrentTime()).toBe('2019-01-06T23:56:00Z')
  })

  it('returns current time with offset', () => {
    expect(time.getCurrentTime('+12:00')).toBe('2019-01-07T11:56:00+12:00')
  })

  it('returns current time if passed negative UTC offset', () => {
    expect(time.getCurrentTime('-12:00')).toBe('2019-01-06T11:56:00-12:00')
  })

  it('throws if passed an invalid UTC offset', () => {
    expect(() => time.getCurrentTime('bad offset')).toThrow()
  })

  it('throws if passed an out of range positive UTC offset', () => {
    expect(() => time.getCurrentTime('+14:01')).toThrow()
  })

  it('throws if passed an out of range negative UTC offset', () => {
    expect(() => time.getCurrentTime('-12:01')).toThrow()
  })
})
