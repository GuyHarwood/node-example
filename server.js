var  express = require('express'),
        app = express();

const time = require('./controllers/time'),
   bodyParser = require('body-parser');
   
app.use(bodyParser.urlencoded({
    extended: true
  }));



time(app);


app.listen(3000,function(){
    console.log("Listening to port 3000");
});