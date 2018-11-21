const index = require('./index');
const currentTime = require('./currentTime');


module.exports = app => {
  app
    .use('/', index)
    .use('/time', currentTime)

};
