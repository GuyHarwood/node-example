'use strict'
const request = require('request');

/* global describe, it, expect */

describe('DateTime returns a current time with offset', () => {
  const time = require('../../services/timeService')
  it('returns offset time', () => {
    request("http://localhost:8082/time/time/-4", function(error, response, body){
    expect(body).toEqual("2018-10-21T08:26:52.000+00:04");

  })
})

})
