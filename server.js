const Koa = require('koa')
const http = require('http')
const Router = require('koa-router')

const nowController = require('./controllers/now')

function createServer () {
  const app = new Koa()

  const server = http.createServer(app.callback())
  const router = new Router()
  router.get('/now', nowController.get)

  app.use(router.routes())
  return server
}

exports.createServer = createServer
