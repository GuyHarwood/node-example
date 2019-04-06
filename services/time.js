// 'use strict'
const moment = require('moment');

const service = {
  execute: (queryOffset = null) => {
    const stringOffset = /((\-((0[0-9])|(1[0-2])))|(((0[0-9])|(1[0-4])))):00/;
    let ret;
    let offset = {
      value: null,
      error: false,
      mode: null
    }
    if (queryOffset) {
      queryOffset = queryOffset.trim();
      // test offset against regex
      // determine offset
      if (stringOffset.test(queryOffset)) {
        offset.value = (queryOffset[0] !== '-' ? '+': '') + queryOffset;
        offset.mode = 'string_GMT';
      }
      else {
        let num = Number(queryOffset);
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
      let momentTime = !offset.value ? moment().format('HH:mm') : moment().utcOffset(offset.value).format('hh:mm');
      // res.send(momentTime);
      ret = momentTime;
    }
    else {
      ret = `The offset provided (${queryOffset}) is not valid.\nValid offset inputs:\n - '-12:00'-'+14:00'\n -Numbers, where if less than 16 and greater than -16 will be interpreted as hours, otherwise minutes.`;
    }
    return ret;

  }
}

module.exports = service
