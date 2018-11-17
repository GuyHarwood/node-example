module.exports = class Controller {
  constructor(request, response) {
    this.params = request.params
    this.response = response
  }

  reject(statusCode, errorMessage) {
   this.response
     .status(statusCode)
     .json({error: errorMessage})
  }
}
