import axio from "axios"

describe('Server Spec', () => {
    let server: any;
    const baseURL = 'http://localhost:3000';

    beforeAll(() => {
        const { startServer } = require('./server');
        server = startServer();
    });

    afterAll(() => {
        server.close()
    });

    describe('/', () => {
        it(`should respond with the message Fantoo API`, async () => {
            const response = await axio.get(`${baseURL}/`);
            expect(response.data).toEqual('Inteview Test API');
        });
    });
})