const service = require('../services/hello-world');
module.exports = (app) => {
    app.route("/time")
        .get(service.execute)
}

