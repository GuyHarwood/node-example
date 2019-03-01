import axio from "axios"

describe('TimeAPISpec', () => {
    let server: any;
    const baseURL = 'http://localhost:3000';

    beforeAll(() => {
        jasmine.clock().install()

        const mockDate = new Date(2019, 2, 1, 22, 30)
        jasmine.clock().mockDate(mockDate)

        const { startServer } = require('../server');
        server = startServer();
    });

    afterAll(() => {
        server.close()
        jasmine.clock().uninstall()
    });

    [{
        offset: "-01:00",
        expectedCurrentTime: '2019-03-01T21:30'
    }, {
        offset: "60",
        expectedCurrentTime: '2019-03-01T23:30'
    }].forEach(testCase => {
        it('should respond back with the current time with offset -01:00', async () => {
            const response = await axio.get(`${baseURL}/api/time?offset=${testCase.offset}`);

            expect(response.status).toEqual(200);
            expect(response.data).toEqual(testCase.expectedCurrentTime);
        });
    });
});