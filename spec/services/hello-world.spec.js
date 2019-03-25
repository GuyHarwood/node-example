'use strict'

/* global describe, it, expect */

describe('return date', () => {
  const sut = require('../../services/showTime')
  it('should be string', () => {
    const date = sut.execute()
    let typeCheck = typeof date
    expect(typeCheck).toEqual('string');
  })
})
