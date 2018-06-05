'use strict'

const moment = require('moment-timezone')
const getTimeService = require('../../services/get-time')
const sinon = require('sinon')

describe('Get Time Service', () => {

  let now = new Date()

  beforeAll(function() {
   
      sinon.stub(getTimeService, 'execute').callsFake((param) => {

        if(!param || typeof(param) !== 'number') {
            param = moment(now).utcOffset() // current UTC offset
        }

        return (moment(now).utcOffset(param).format())

      });
  
  });

  afterAll( function () {
      sinon.restore();
  });
  
  it('returns Time Message (default)', () => {
    const message = getTimeService.execute()
    const utcOffset = moment(now).utcOffset()
    const expected = moment(now).utcOffset(utcOffset).format()
    expect(message).toEqual(expected)
  })

  it('returns Time Message (offset 100-2400)', () => {
    for(let offset=1; offset<25; offset++) {
      const message = getTimeService.execute(offset * 100)
      const expected = moment(now).utcOffset(offset * 100).format()
      expect(message).toEqual(expected)
    }
  })

})
