const express = require('express');

const index = require('./routes/index');
const time = require('./routes/time');

const app = express();

app.use('/', index);
app.use('/time', time);


module.exports = app;
