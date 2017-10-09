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
    crn: parseInt(request.crn),
    phone: request.phone
  })

  //Saving this request into the database
  newRequest.save(newRequest, (err) => {
    if(err){

      //Logging error and sending error status
      console.log(err)
      return res.status(500).send({message: 'ERROR'})
    } else {

      //sent reponse to front end
      console.log('no errors with data entry')
      return res.send({message: 'OK'})
    }
  })

})

module.exports = router;
