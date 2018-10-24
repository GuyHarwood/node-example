const DateService = require('../../../services/date/DateService');

describe('Date Service', () => {
    let service;

    beforeEach(() => {
        service = new DateService();
    });

    describe('getTime', () => {
        it('should return the current time', () => {
            const date = new Date();

            date.setHours(5);
            date.setMinutes(10);
            date.setSeconds(43);

            const time = service.getTime(date);

            expect(time).toBe("5:10:43");
        });

        it('should return padded minutes and seconds if needed', () => {
            const date = new Date();

            date.setHours(5);
            date.setMinutes(1);
            date.setSeconds(1);

            const time = service.getTime(date);

            expect(time).toBe("5:01:01");
        })

        it('should return the current time without a date being specified', () => {
            expect(service.getTime()).toMatch(
                /[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}/
            )
        });

        it('should throw an error if provided date is not instance of Date', () => {
            expect(() => {
                service.getTime({})
            }).toThrow(Error("Specified date must be instance of Date"));
        });
    });
});