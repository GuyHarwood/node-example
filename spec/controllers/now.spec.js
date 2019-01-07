'use strict'

/* global describe, it, expect */

describe('Now Controller', () => {
  let timeService
  let nowController
  let timeServiceSpy

  beforeAll(() => {
    timeService = require('../../services/time')
    timeServiceSpy = spyOn(timeService, 'getCurrentTime')
    nowController = require('../../controllers/now')
  })

  beforeEach(() => {
    timeServiceSpy.and.returnValue('some-time')
  })

  afterEach(() => {
    timeServiceSpy.calls.reset()
  })

  it('responds with the current time', async () => {
    const ctx = {
      body: {},
      request: {
        query: {}
      }
    }
    await nowController.get(ctx)
    expect(ctx.body).toEqual({ time: 'some-time' })
  })

  it('passes the offset query string', async () => {
    const ctx = {
      body: {},
      request: {
        query: {
          offset: 'some-offset'
        }
      }
    }
    await nowController.get(ctx)
    expect(timeService.getCurrentTime).toHaveBeenCalledWith('some-offset')
  })
})
