const routeController = require('./route.controller');

const startServer = () => {
    const http = require('http');

    const port = 3000;
    const server = http.createServer(routeController).listen(3000);

    console.log(`Listening ${port}`);

    return server;
};

module.exports = startServer;