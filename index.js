'use strict'

var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/api/v1/', function (req, res) {
  res.send(JSON.stringify({title:'SQA Title', id:1234}))
})

app.listen(3000)
