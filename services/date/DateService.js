module.exports = class DateService {

    _padLeadingZeroes(num){
        const numLength = num.toString().length;
        return numLength >= 2 ? num : "0".repeat(2 - numLength) + num;
    }

    /**
     * Returns the current time,
     * optionally can override base date object
     * @param date Date
     * @returns {string}
     */
    getTime(date = new Date()) {
        if(!(date instanceof Date)){
            throw Error("Specified date must be instance of Date");
        }

        const h = date.getHours();
        const m = this._padLeadingZeroes(date.getMinutes());
        const s = this._padLeadingZeroes(date.getSeconds());

        return `${h}:${m}:${s}`;
    }
};