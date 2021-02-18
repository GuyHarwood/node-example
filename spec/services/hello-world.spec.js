'use strict'

/* global describe, it, expect */

describe('Hello World Service', () => {
  const sut = require('../../services/hello-world')
  it('returns Hello World Message', () => {
    const message = sut.execute()
    expect(message).toBe('Hello World')
  })
})
