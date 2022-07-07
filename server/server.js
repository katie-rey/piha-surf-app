const express = require('express')
const path = require('path')
const request = require('superagent')
const cors = require('cors')
const fruitRoutes = require('./routes/fruits')
const axios = require('axios')
require('dotenv').config()

const server = express()

server.use(cors())

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)

server.get('/weather', (req, res) => {
  const options = {
    method: 'GET',
    url: process.env.WEATHER_URL,
    params: {
      q: '-36.9545, 174.4744',
      key: process.env.WEATHER_KEY,
      format: 'json',
      tp: '24',
      tide: 'yes',
    },

    // body: JSON.stringify(options),
  }

  axios
    .request(options)
    .then((response) => {
      // const newOptions = JSON.stringify(response.data)
      res.json(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
})

//   request
//     .get('https://random-d.uk/api/random')
//     .set('accept', 'application/json')
//     .then((response) => {
//       console.log('this is the server speaking', response.body)
//       res.json(response.body)
//     })
//     .catch((err) => console.error(err))
// })

module.exports = server
