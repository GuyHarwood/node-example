const express = require('express')
const app = express()

const routes = {
  getTime: require('./routes/get-time.js')
}

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/getTime/:offset?', routes.getTime)

app.listen(3000, () => console.log('Example app listening on port 3000!'))

module.exports = app