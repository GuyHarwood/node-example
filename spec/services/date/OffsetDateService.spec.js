const OffsetDateService = require("../../../services/date/OffsetDateService");

describe("Offset Date Service", () => {
    let service;

    beforeEach(() => {
        service = new OffsetDateService();
    });

    describe('getTime', () => {
        it('should be able to offset a date by given hours', () => {
            const date = new Date();

            date.setHours(5);
            date.setMinutes(1);
            date.setSeconds(1);

            const time = service.getTime(date, 5);

            expect(time).toBe("10:01:01");
        });

        it('should only allow timezone offsets to be between -12 and +12', () => {
            expect(() => {
                service.getTime(undefined, 1000)
            }).toThrow(Error("Time offset must be between -12 and +12"));
            expect(() => {
                service.getTime(undefined, -1000)
            }).toThrow(Error("Time offset must be between -12 and +12"));
        });
    })
});