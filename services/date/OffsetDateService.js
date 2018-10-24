const DateService = require("./DateService");

/**
 * Extension of DateService to allow for dates offset by timezone
 * @type {module.OffsetDateService}
 */
module.exports = class OffsetDateService extends DateService {
    getTime(date = new Date(), offset = 0) {

        //Ensuring that the offset lies between allowed timezones,
        //in reality there are so many rules and exclusions to the rules
        //with times that anything more complicated would be implemented using
        //a trusted library
        if (offset < -12 || offset > 12) {
            throw Error("Time offset must be between -12 and +12");
        }

        date = new Date(date.getTime() + offset * 60 * 60 * 1000);

        return super.getTime(date);
    }
};