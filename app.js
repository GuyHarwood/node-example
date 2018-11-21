const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();
routes(app);

const PORT = process.env.PORT|| 8082;
app.listen(PORT, '0.0.0.0');

console.log(`👏  Listening on port ${PORT}`);
module.exports = app;
