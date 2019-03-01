import moment from "moment";

export class TimeService {
    private static readonly HOUR_MINUTES_PATTERN = new RegExp(/^[+-]\d\d\:\d\d$/);

    static now(offset: string) {
        return moment().utcOffset(this.getValidatedOffset(offset)).format('YYYY-MM-DDTHH:mm');
    }

    private static getValidatedOffset(offset: string) {
        if (!isNaN(Number(offset))) {
            return Number(offset)
        } else if (this.HOUR_MINUTES_PATTERN.test(offset)) {
            return offset
        } else {
            return 0;
        }
    }
}