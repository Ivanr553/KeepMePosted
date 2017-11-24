const express = require('express')
const router = express.Router()
const path = require('path')
const request = require('request-promise')

//Routing for React front end
router.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
});

//Routing for posts to the api/database
router.post('/api', async (req, res) => {             // DELETED async

  let options = {
    method: 'POST',
    // url: 'https://kmp-api.herokuapp.com/entry',
    url: 'http://localhost:8080/entry',
    body: req.body.newEntry,
    headers: {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    },
    json: true
  }

  let apiRes = await request(options)       //   DELETED await
  console.log(apiRes)

  res.send(apiRes)

})

module.exports = router;
