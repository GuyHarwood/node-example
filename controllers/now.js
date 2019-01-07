const { getCurrentTime } = require('../services/time')

async function get (ctx) {
  ctx.body = {
    time: getCurrentTime(ctx.request.query.offset)
  }
}

module.exports = { get }
