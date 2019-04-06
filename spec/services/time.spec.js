'use strict'
const moment = require('moment')
/* global describe, it, expect */

describe('Testing time service', () => {
  const sut = require('../../services/time')
  it('Testing error case: wrong positive GMT format', () => {
    const message = sut.execute('+3:00');
    expect(message).toBe(getErrorMessage('+3:00'));
  })
  it('Testing error case: wrong negative GMT format', () => {
    const message = sut.execute('-3:00');
    expect(message).toBe(getErrorMessage('-3:00'));
  })
  it('Testing error case: positive number above 14, there is no GMT+15:00 (onwards) offset', () => {
    const message = sut.execute('+15:00');
    expect(message).toBe(getErrorMessage('+15:00'));
  })
  it('Testing error case: negative number below -12, there is no GMT-13:00 offset', () => {
    const message = sut.execute('-13:00')
    expect(message).toBe(getErrorMessage('-13:00'));
  })
  // correct form
  it('Testing correct case: GMT format', () => {
    const message = sut.execute('+08:00');
    expect(message).toBe(moment().utcOffset('+08:00').format('HH:mm'));
  })
  it('Testing correct case: number (hours)', () => {
    const message = sut.execute(String(8));
    expect(message).toBe(moment().utcOffset(8).format('HH:mm'));
  })
  it('Testing correct case: number (minutes)', () => {
    const message = sut.execute(String(60*8));
    expect(message).toBe(moment().utcOffset(60*8).format('HH:mm'));
  })
})


let getErrorMessage = function (param) {
  return `The offset provided (${param}) is not valid.\nValid offset inputs:\n - '-12:00'-'+14:00'\n -Numbers, where if less than 16 and greater than -16 will be interpreted as hours, otherwise minutes.`
}