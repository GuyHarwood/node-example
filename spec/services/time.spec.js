const Moment = require('moment-timezone')
const time = require('../../services/time')

describe('The time service', () => {
  let mockedNow

  beforeAll(() => {
    jasmine.clock().mockDate(Date())
  });

  it('should return current time in GMT if no offset is specified', () => {
    expect(time.getCurrent())
      .toEqual(Moment.tz('UTC').format('HH:mm:ss'))
  });

  it('should return current time from specified offsets', () => {
    expect(time.getCurrent(1))
      .toEqual(Moment.tz('UTC').add(1, 'hours').format('HH:mm:ss'))
  
    expect(time.getCurrent(-6))
      .toEqual(Moment.tz('UTC').add(-6, 'hours').format('HH:mm:ss'))
  });
});
