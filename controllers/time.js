const service = require('../services/time');

getTime = function(req, res){
    let offset = null;
    let msg = '';
    //Check if param 'offset' exists
    if(req.query && req.query.offset)
        offset = req.query.offset;
    //Let the service determine the response message
     msg = service.execute(offset);
     res.send(msg);
}

module.exports = (app) => {
    app.route("/time")
        .get(getTime)
}

