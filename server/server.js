//Packages
let express = require('express')
let fs = require('fs')
let path = require('path')
let mongoose = require('mongoose')

//Initializing app
let app = express()

//Imports
let indexRoute = require('./routes/index')
let db = require('../config/database')

//View Engine
app.set('view engine', 'html')
app.engine('html', function(path, options, callbacks) {
  fs.readFile(path, 'utf-8', callback)
})

//Static files
app.use(express.static(path.join(__dirname, '../client')))

//Routes
app.use('/', indexRoute)

//Error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
})

//Connect to database
mongoose.connect(db.db)

mongoose.connection.on('connected', () => {
  console.log('Connected to database')
})

module.exports = app
