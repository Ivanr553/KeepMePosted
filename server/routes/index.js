const express = require('express')
const router = express.Router()
const path = require('path')
const mongoose = require('mongoose')
const Request = require('../../models/kmpRequest')

router.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'))
});

// router.get('/', function(req, res) {
//
// })

router.post('/request', (req, res) => {

  //Assignign the body of the request received into a variable
  let request = req.body.request

  //Creating a new Request Document using the received request
  let newRequest = new Request({
    class: request.class,
    term: request.term,
    phone: request.phone
  })

  //Saving this request into the database
  newRequest.save(newRequest)

  res.send()

  console.log('requst went through')
})

module.exports = router;
