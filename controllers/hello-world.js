const HelloWorldService = require( '../services/hello-world');

module.exports = {
    install(router) {
        router.get("/helloWorld", (req, res) => {
            res.send(HelloWorldService.execute());
        });
    }
};