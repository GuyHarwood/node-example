const getCurrentTime = require("./time/time.service");
const url = require("url");
const qs = require("querystring")

const route = (req, res) => {
    try {
        const { pathname, query } = url.parse(req.url)
        switch (pathname) {
            case '/time':
                const offset = qs.parse(query).offset;
                handleSuccess(res, getCurrentTime(offset))
                break;

            default:
                handleSuccess(res, 'Interview Test API');
                break;
        }
    } catch (e) {
        res.writeHead(400, 'Bad Request');
        res.write(e)
    }
}

const handleSuccess = (res, responseBody) => {
    res.writeHead(200);
    res.write(responseBody)
    res.end();
}

module.exports = route;