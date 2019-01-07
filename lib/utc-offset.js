class OffsetFormatError extends Error {
  constructor () {
    super(...arguments)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, OffsetFormatError);
    }
  }
}

const offsetFormatRegex = /^[+-]\d\d\:\d\d$/

/**
 * Parses UTC offset string with the format specified in
 * https://en.wikipedia.org/wiki/UTC_offset
 *
 * @param {string} offset UTC offset raw format
 * @return {number} UTC offset in minutes
 */
function parseOffset (offset) {
  if (!offsetFormatRegex.test(offset)) {
    throw new OffsetFormatError('Bad Syntax')
  }

  const operator = offset.charAt(0)
  const [ hours, minutes ] = offset
    .slice(1)
    .split(':')
    .map(n => parseInt(n, 10))

  if (minutes > 59) {
    throw new OffsetFormatError('Minutes should not go above 59')
  }

  if (operator === '+' && hours > 14) {
    throw new OffsetFormatError('Positive hours should not go above 14')
  }

  if (operator === '-' && hours > 12) {
    throw new OffsetFormatError('Negative hours should not go above 12')
  }

  const noOpsTimeInMinutes = (hours * 60) + minutes
  const totalTimeInMinutes = operator === '+' ? noOpsTimeInMinutes : -noOpsTimeInMinutes

  if (totalTimeInMinutes < -720 || totalTimeInMinutes > 840) {
    throw new OffsetFormatError('Offset is outside the maximum range')
  }

  return totalTimeInMinutes
}

module.exports = { parseOffset, OffsetFormatError }
