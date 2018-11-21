
const Boom = require('boom');
 const DateTime  = require('luxon').DateTime

const getCurrentTime = offset =>{

   if(!offset || typeof(offset) !== 'number') {

  DateTime.local(2017, 5, 25, 9, 30, 52).toUTC(new Date());
          }

  return DateTime.local(2018, 10, 21, 9, 30, 52).toUTC(offset);
};

module.exports = {
  getCurrentTime
};
