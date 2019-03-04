'use strict'

describe('Get date and time in a different timezone', () => {

  const funct = require('../../services/return-current-time');
  
  it('returns the date and time (max 1 sec difference)', async() => {
    
    const timezone = "13";
    const testDT = new Date();

    const response = await funct.execute(timezone);
    const responseTS = new Date(JSON.parse(response));
    const responseDT = responseTS.getTime();
    
    const convTestDT = testDT.getTime() + (timezone * 60 * 60 * 1000);

    expect(responseDT - convTestDT).toBeLessThan(1000);
  });

  it('fails because of invalid timezone (string)', async() => {
    
    const timezone = "3fkh";

    const response = await funct.execute(timezone);

    expect(response).toBe('Invalid timezone');
  });

  it('fails because of invalid timezone (value out of range)', async() => {
    
    const timezone = 50;

    const response = await funct.execute(timezone);

    expect(response).toBe('Invalid timezone');
  });
});