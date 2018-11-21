const Boom = require('boom');
const timeService = require('../services/timeService');



exports.curentTimeRequest =  (req, res, next) => {

      if (req.params.offset < -12 || req.params.offset >= 14) {
         next(Boom.notAcceptable(' offet value unacceptable , should be between -12 and 14'));
      }
     res.send(timeService.getCurrentTime(req.params.offset));


};
