// 'use strict'
const moment = require('moment');

const service = {
  execute: (req, res, next) => {
    const stringOffset = /((\-((0[0-9])|(1[0-2])))|(((0[0-9])|(1[0-4])))):00/;

    let offset = {
      value: null,
      error: false,
      mode: null
    }
    if (req.query.hasOwnProperty('offset')) {
      // test req.query.offset against regex
      // determine offset
      if (stringOffset.test(req.query.offset)) {
        offset.value = (req.query.offset[0] !== '-' ? '+': '') + req.query.offset;
        offset.mode = 'string_GMT';
      }
      else {
        let num = Number(req.query.offset);
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
      res.send(momentTime);
    }
    else {
      res.send(`The offset provided (${req.query.offset}) is not valid.\nValid offset inputs:\n - '-12:00'-'+14:00'\n -Numbers, where if less than 16 and greater than -16 will be interpreted as hours, otherwise minutes.`)
    }

  }
}

module.exports = service
