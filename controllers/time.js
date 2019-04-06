const service = require('../services/time');

getTime = function(req, res, next){
    let offset = null;
    let msg = '';
    if(req.query && req.query.offset)
        offset = req.query.offset;
     msg = service.execute(offset);
     res.send(msg);
}

module.exports = (app) => {
    app.route("/time")
        .get(getTime)
}

