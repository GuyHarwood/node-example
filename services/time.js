// 'use strict'
const moment = require('moment');

const service = {
  //Setting querryOffset = null, to return current time in case no value is provided
  execute: (queryOffset = null) => {
    //When string value provided, RegEx ensures the value complies with the format
    const stringOffset = /((\-((0[0-9])|(1[0-2])))|(\+((0[0-9])|(1[0-4])))|(((0[0-9])|(1[0-4])))):00/;
    let ret;
    let offset = {
      value: null,
      error: false,
      mode: null
    };
    if (queryOffset) {
      //Trimming the spaces
      queryOffset = queryOffset.trim();
      // test offset against regex
      // determine offset
      let result = stringOffset.exec(queryOffset)
      if (result && queryOffset === result[0]) {
        //Ensure that MomentJS gets the proper offset parameter
        offset.value = (queryOffset[0] !== '-' ? '+': '') + queryOffset;
        offset.mode = 'string_GMT';
      }
      else {
        let num = Number(queryOffset);
        //Check NaN case
        if (num !== 0 && !num) {
          offset.error = true;
        }
        else {
          // MomentJs Documentation: 
          // If the input is less than 16 and greater than -16, it will interpret your input as hours instead.
          offset.value = num;
          offset.mode = 'number';
        }
      }
    }
    if (!offset.error) {
      //Checking if there is offset value and act accordingly
       ret = !offset.value ? moment().format('HH:mm') : moment().utcOffset(offset.value).format('HH:mm');
    }
    else {
      //Error case
      ret = `The offset provided (${queryOffset}) is not valid.\nValid offset inputs:\n - '-12:00'-'+14:00'\n -Numbers, where if less than 16 and greater than -16 will be interpreted as hours, otherwise minutes.`;
    }
    return ret;

  }
}

module.exports = service
