'use strict'
const moment = require('moment');

const controller = {
  get: (offset = '') => {
    // if offset is not in a proper format just ignore it
    if (!offset.match(/^[+,-]?\d{2}:\d{2}$/)) {
      offset = null;
    } else
    // first character is a number then add + at the beginning
    if (offset.match(/^\d/)) {
      offset = `+${offset}`;
    }

    // generate utc time
    let time = moment().utc();

    if(offset) { // add offset if necessary
      time.utcOffset(offset);
    }

    // return formated
    return time.format();
  }
}

module.exports = controller;
