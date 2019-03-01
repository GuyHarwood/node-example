import express, { Request, Response } from 'express';

export const startServer = () => {
    const http = require('http');
    const {routes} = require('./routes');
    const bodyParser = require('body-parser');

    const app: express.Application = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    const port = 3000;
    const server = http.createServer(app).listen(3000);
    console.log(`Listening ${port}`);

    console.log('Register all the routes');
    app.use('/api', routes);

    app.get('/', (req: Request, response: Response) => {
        response.send('Inteview Test API');
    });

    return server;
};
