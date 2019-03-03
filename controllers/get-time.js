

module.exports = {
    install(router) {
        const GetTimeService = require( '../services/get-time');
        router.get("/getTime", (req, res) => {
            res.send(GetTimeService.execute(req.query.offset));
        });
    }
};