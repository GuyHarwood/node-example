'use strict'

const getTimeController = require('../controllers/get-time')

const getTimeService = {
  execute: (param) => {
    return getTimeController.execute(param)
  }
}

module.exports = getTimeService
