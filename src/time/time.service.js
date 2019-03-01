const moment = require('moment');

const HOUR_MINUTES_PATTERN = new RegExp(/^[+-]\d\d\:\d\d$/);
const now = (offset) => {
    return moment().utcOffset(getValidatedOffset(offset)).format('YYYY-MM-DDTHH:mm');
}

const getValidatedOffset = (offset) => {
    if (!isNaN(Number(offset))) {
        return Number(offset)
    } else if (HOUR_MINUTES_PATTERN.test(offset)) {
        return offset
    } else {
        return 0;
    }
}

module.exports = now