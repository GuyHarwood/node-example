'use strict'

const moment = require('moment-timezone')
const request = require('supertest')
const sinon = require('sinon')
const getTimeController = require('../../controllers/get-time')
const app = require('../../app')

let agent;

describe('Get Time Route', () => {

  let now = new Date()

  beforeAll(function() {
   
      sinon.stub(getTimeController, 'execute').callsFake((param) => {

        if(!param || typeof(param) !== 'number') {
            param = moment(now).utcOffset() // current UTC offset
        }

        return (moment(now).utcOffset(param).format())

      });
  
  });

  afterAll( function () {
      sinon.restore();
  });

  it('returns Time Message (default)', (done) => {

    const utcOffset = moment(now).utcOffset()
    const expected = moment(now).utcOffset(utcOffset).format()

    request(app)
        .get('/getTime')
        .expect(200, {
          time: expected,
          offset: 0
        })
        .end((error) => (error) ? done.fail(error) : done())
  })

  it('returns Time Message (offset 100-2400)', (done) => {
    let expected
    for(let offset=1; offset<25; offset++) {
      expected = moment(now).utcOffset(offset).format()
      request(app)
        .get('/getTime/' + offset)
        .expect(200, {
          time: expected,
          offset: offset
        })
        .end((error) => (error) ? done.fail(error) : done())
    }
  })

})
