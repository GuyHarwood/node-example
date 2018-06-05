const getTimeService = require('../services/get-time.js');

module.exports = function(req, res) {

  let offset = 0

  if(req.params.offset) {
    offset = parseInt(req.params.offset)
  }

  res.json({
    time: getTimeService.execute(offset),
    offset: offset
  })

}