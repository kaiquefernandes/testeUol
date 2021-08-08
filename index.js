var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var http = require('http')

var app = express()

app
  .disable('x-powered-by')
  .disable('etag')
  .use(cors())
  .use(bodyParser.json({limit: '1mb'}))
  .use(bodyParser.urlencoded({limit: '1mb',extended: true}))
  .use(express.static(__dirname + '/files'))
  
 
  require('dotenv').config()

  app.get('/', function (req, res, next) {
    res.json({
      test: 'api',
      status: 200,
    })
  })

const port = 3333

const server = http.createServer(app)

server.listen(port, function(req, res) {
  console.log('Running on port: ' + port)
}).timeout = 0

var router = require('express').Router()
app.use('/api', router)
require(__dirname + '/api/index.js')(router, app)
