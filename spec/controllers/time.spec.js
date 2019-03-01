'use strict';
const sinon = require('sinon');
const moment = require('moment');

const testTime = '2000-01-01T00:00:00Z';

describe('Calculate time', () => {
  const controller = require('../../controllers/time');
  sinon.useFakeTimers(moment(testTime).valueOf());

  it('returns expected date, no offset used', () => {
    const time = controller.get();
    const expectedTime = testTime;
    expect(time).toBe(expectedTime);
  });

  it('returns expected date, invalid offset used', () => {
    const time = controller.get('abcde');
    const expectedTime = testTime;
    expect(time).toBe(expectedTime);
  });

  it('returns expected date, +12h offset used', () => {
    const offset = '+10:00';
    const time = controller.get(offset);
    const expectedTime = moment(testTime).utcOffset(offset);
    expect(time).toBe(expectedTime.format());
  });

  it('returns expected date, -12h offset used', () => {
    const offset = '-12:00';
    const time = controller.get(offset);
    const expectedTime = moment(testTime).utcOffset(offset);
    expect(time).toBe(expectedTime.format());
  });

  it('returns expected date, 01:00 (no +) offset used', () => {
    const offset = '01:00';
    const time = controller.get(offset);
    const expectedTime = moment(testTime).utcOffset(`+${offset}`);
    expect(time).toBe(expectedTime.format());
  });

  it('returns expected date, fraction hour offset used', () => {
    const offset = '+00:01';
    const time = controller.get(offset);
    const expectedTime = moment(testTime).utcOffset(`+${offset}`);
    expect(time).toBe(expectedTime.format());
  });
});
