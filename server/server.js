const express = require('express')
const path = require('path')
const request = require('superagent')
const cors = require('cors')

const axios = require('axios')
require('dotenv').config()

const server = express()

server.use(
  cors({
    origin: ['http://localhost:3000'],
  })
)

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

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
  }

  axios
    .request(options)
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
})

module.exports = server
