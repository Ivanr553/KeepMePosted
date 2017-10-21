//Packages
const express = require('express')
const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

//Initializing app
const app = express()

//MiddleWare
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Imports
const indexRoute = require('./routes/index')

//View Engine
app.set('view engine', 'html')
app.engine('html', function(path, options, callbacks) {
  fs.readFile(path, 'utf-8', callback)
})

//Static files
app.use(express.static(path.join(__dirname, '../public')))

//Routes
app.use('/', indexRoute)

//Error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
})

module.exports = app
