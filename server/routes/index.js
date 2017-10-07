const express = require('express')
const router = express.Router()
const path = require('path')
const mongoose = require('mongoose')
const Request = require('../../models/kmpRequest')

router.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'))
});

router.post('/request', (req, res) => {

  //Assigning the body of the request received into a variable
  let request = req.body.request

  //Creating a new Request Document using the received request
  let newRequest = new Request({
    subject: request.subject,
    year: request.year,
    season: request.season,
    crn: request.crn,
    phone: request.phone,
    date: new Date()
  })

  //Saving this request into the database
  newRequest.save(newRequest)

  //sent reponse to front end
  res.send()

  console.log('request went through')
})

module.exports = router;
