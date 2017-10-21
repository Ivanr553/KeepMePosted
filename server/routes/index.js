const express = require('express')
const router = express.Router()
const path = require('path')
const request = require('request-promise')

router.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
});

router.post('/api', async (req, res) => {

  let options = {
    method: 'POST',
    url: 'http://localhost:8080/entry',
    body: req.body.newEntry,
    headers: {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    },
    json: true
  }

  let apiRes = await request(options)

  res.send(apiRes)

})

module.exports = router;
