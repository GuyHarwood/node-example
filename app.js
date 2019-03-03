const Express = require('express');
const HelloWorldController = require('./controllers/hello-world');
const GetTimeController = require('./controllers/get-time');

let app = Express();
let router = Express.Router();

HelloWorldController.install(router);
GetTimeController.install(router);

app.use('/', router);
app.listen(80);