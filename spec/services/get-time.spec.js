'use strict'

/* global describe, it, expect */

describe('Get Time Service', () => {
  const sut = require('../../services/get-time');
  it('Returns current time with GMT offset 0 when none is specified', () => {
    const message = sut.execute();
    expect(message).toBe(new Date().toString());
  });

  it('Returns current time with GMT offset specified', () => {
    let now = new Date().getTime();
    const message1 = sut.execute("0110");
    expect(message1).toBe(new Date(now + 4200000).toString());
    const message2 = sut.execute("-0110");
    expect(message2).toBe(new Date(now - 4200000).toString());
  });

  
  let testThese = ["a0110", "+01a0", "+2500", "+0060"];
  for (let i = 0; i < testThese.length; ++i) {
    it('Should treat the GMT offset as 0 when an invalid or out of range value is passed (' + testThese[i] + ")", () => {
      let now = new Date();
      let message = sut.execute(testThese[i]);
      expect(message).toBe(now.toString());
    });
  }
})
