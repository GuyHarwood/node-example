'use strict'

/* global describe, it, expect */

const request = require('supertest')

describe('Server', () => {
  let Server
  let nowController
  let nowControllerSpy

  beforeAll(() => {
    nowController = require('../controllers/now')
    nowControllerSpy = spyOn(nowController, 'get')
    Server = require('../server')
  })

  beforeEach(() => {
    nowControllerSpy.and.callThrough()
  })

  afterEach(() => {
    nowControllerSpy.calls.reset()
  })

  it('GET /now is connected properly', async () => {
    const server = Server.createServer()

    await request(server)
      .get('/now')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(nowController.get).toHaveBeenCalled()
  })
})
