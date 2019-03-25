var http = require('http');
var controller = require('./controller');

http.createServer(function (req, res) {
  res.write(controller.showTime())
  res.end(); //end the response
}).listen(3000, function(){
 console.log("server start at port 3000"); //the server object listens on port 3000
});