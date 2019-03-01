import { TimeService } from './time.service';

describe('TimeServiceSpec', () => {
    beforeEach(() => {
        const mockDate = new Date(2019, 2, 1, 22, 30)
        jasmine.clock().install()
        jasmine.clock().mockDate(mockDate)
    });

    afterEach(() => {
        jasmine.clock().uninstall()
    });

    const testCases = [{
        offset: '0',
        expectedCurrentTime: '2019-03-01T22:30'
    }, {
        offset: 'abcd',
        expectedCurrentTime: '2019-03-01T22:30'
    }, {
        offset: '+ab:cd',
        expectedCurrentTime: '2019-03-01T22:30'
    }, {
        offset: '+12:00',
        expectedCurrentTime: '2019-03-02T10:30'
    }, {
        offset: '-12:00',
        expectedCurrentTime: '2019-03-01T10:30'
    }, {
        offset: '+02:00',
        expectedCurrentTime: '2019-03-02T00:30'
    }, {
        offset: '120',
        expectedCurrentTime: '2019-03-02T00:30'
    }, {
        offset: '-02:00',
        expectedCurrentTime: '2019-03-01T20:30'
    }, {
        offset: '-120',
        expectedCurrentTime: '2019-03-01T20:30'
    }];

    testCases.forEach(testCase => {
        it(`should return the correct current time calculated with offset ${testCase.offset}`, () => {
            expect(TimeService.now(testCase.offset)).toBe(testCase.expectedCurrentTime)
        });
    });
})