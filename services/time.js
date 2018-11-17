const Moment = require('moment-timezone')

exports.getCurrent = offset => {
  return Moment.tz('UTC').add(offset, 'hours').format('HH:mm:ss')
}
