const service = require('./services/showTime')

exports.showTime = (offset = 0) => {
    return service.execute(offset);
}
