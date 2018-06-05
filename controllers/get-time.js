'use strict'

const moment = require('moment-timezone')

const controller = {
  execute: ( param ) => {

    if(!param || typeof(param) !== 'number') {
        param = moment().utcOffset() // current UTC offset
    }

    return (moment().utcOffset(param).format())
  }
}

module.exports = controller
