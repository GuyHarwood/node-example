var express = require('express');
var app = express();

app.get('/', function(req, res) {
  const tz = req.query.timezone || 0; 

  if ( isNaN(tz) == false && tz <= 13 && tz >= -12) {
    
    const nowTS = new Date();
    const convDT = nowTS.getTime()+(tz * 60 * 60 * 1000);
    const convTS = new Date(convDT);

    res.send(convTS);
  }

  else {

    res.status('400').send('Invalid timezone');
  }
  
});

app.listen(2345, () => {
  console.log('Listening on localhost:2345');
});