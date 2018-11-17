const Controller = require('./base')
const time = require('../services/time')

module.exports = class CurrentTime extends Controller {
  constructor(request, response) {
    super(request, response)
    this.timeService = time
  }

  validate() {
    let offset = this.params.offset
      ? parseInt(this.params.offset)
      : 0

    if(offset > 14 || offset < -12) {
      this.reject(400, 'offset should be between -12 and 14, both inclusive')
    }

    this.offset = offset
  }

  process() {
    try {
      const time = this.timeService.getCurrent(this.offset)
      this.response.status(200).json({time})
    } catch (error) {
      this.reject(500, error.message)
    }
  }
}
