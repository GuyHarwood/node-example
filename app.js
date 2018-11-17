const express = require('express')
const app = express()

const CurrentTimeController = require('./controllers/currentTime')


app.get('/current-time', (request, response) => {
  const controller = new CurrentTimeController(request, response)
  controller.validate()
  controller.process()
})

app.listen(process.env.PORT || 1234)
