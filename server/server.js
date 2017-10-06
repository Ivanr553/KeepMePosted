//Packages
let express = require('express')
let fs = require('fs')
let path = require('path')
let mongoose = require('mongoose')
let cors = require('cors')
let bodyParser = require('body-parser')

//Initializing app
let app = express()

//MiddleWare
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

//Console logging connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database')
})

mongoose.connection.on('error', (error) => {
  console.log('There was an error connecting to the database: ' + error)
})

module.exports = app
