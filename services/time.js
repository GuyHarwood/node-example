const moment = require('moment')

const { parseOffset } = require('../lib/utc-offset')

/**
 * Service that returns the current time.
 * Can also return an offset relative to the current UTC time.
 *
 * @param {string} [offset] UTC offset raw format
 * @return {string} A pretty string timestamp of the current time
 */
function getCurrentTime (offset) {
  const now = moment.utc()

  if (offset) {
    now.utcOffset(parseOffset(offset))
  }

  return now.format()
}

module.exports = { getCurrentTime }
