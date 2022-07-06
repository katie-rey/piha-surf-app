import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import { FaCloud, FaMapMarkerAlt, FaWind, FaWater } from 'react-icons/fa'

const axios = require('axios')

// import piha from './asses/piha.png'
// import Item from '@mui/material/Item';

function Home() {
  const [date, setDate] = useState(null)
  const [temp, setTemp] = useState(null)
  const [nowTemp, setNowTemp] = useState(null)
  const [minTemp, setMinTemp] = useState(null)
  const [desc, setDesc] = useState(null)
  const [windSpeed, setWindSpeed] = useState(null)
  const [windDir, setWindDir] = useState(null)

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/weather',
    }
    axios
      .request(options)
      .then((response) => {
        console.log(response.data)
        setDate(response.data.data.weather[0].date)
        setTemp(response.data.data.weather[0].maxtempC)
        setMinTemp(response.data.data.weather[0].mintempC)
        setDesc(response.data.data.weather[0].hourly[0].weatherDesc[0].value)
        setNowTemp(response.data.data.weather[0].hourly[0].tempC)
        setWindSpeed(response.data.data.weather[0].hourly[0].windspeedKmph)
        setWindDir(response.data.data.weather[0].hourly[0].winddir16Point)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  console.log(typeof date)
  console.log(date)
  console.log(temp)
  console.log(minTemp)
  console.log(desc)

  // const today = Date.now()
  // console.log(today)
  // const newDate = today.toDateString()
  // console.log(newDate)

  const d1 = new Date().toDateString()
  console.log(d1)

  const d = new Date(date)
  // const d2 = d.slice(0, 11)
  // const { date } = data
  console.log(d)
  // const newD = d.stringify
  console.log(typeof d)

  // const newData = JSON.parse(data)
  // console.log(newData)

  // const newData = data.weather
  // console
  //   .log(newData)
  // const newData = { data }

  return (
    <>
      {/* {data.map((item) => {
      
      })} */}
      {/* <div className="wrapper">
    <div className="spare-container"></div>
    <div className="hero-body">

    </div>
    <div className="spare-container"></div>
    </div> */}
      <div className="container">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <div className="grid-container"></div>
          </Grid>
          <Grid item xs={8}>
            <div className="grid-container">
              <div className="col-container">
                <div className="row">
                  <FaMapMarkerAlt />
                  Piha{' '}
                </div>
                <div className="row">{d1}</div>
                <div className="row-large">
                  <FaCloud />
                  {nowTemp}℃
                </div>
                <div className="row">
                  {minTemp}℃ / {temp}℃
                </div>
                <div className="row">{desc}</div>
              </div>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div className="grid-container"></div>
          </Grid>
          {/* <Grid item xs={8}>
  <div className="grid-container">xs-2</div>
  </Grid> */}
        </Grid>
      </div>
      <div className="container">
        <div className="row-container">
          <div className="surf-row">
            <FaWind />
          </div>
          <div className="surf-row">{windSpeed}Kmph</div>
          <div className="surf-row">{windDir}</div>
        </div>
        <div className="surf-col-container">
          <div className="surf-row-container">
            <div className="surf-row">
              <FaWind />
            </div>
            <div className="surf-row">{windSpeed}Kmph</div>
            <div className="surf-row">
              <FaWind />
            </div>
            <div className="surf-row">{windDir}</div>
          </div>
          <div className="surf-row-container">
            <div className="surf-row">
              <FaWind />
            </div>
            <div className="surf-row">{windSpeed}Kmph</div>
            <div className="surf-row">
              <FaWind />
            </div>
            <div className="surf-row">{windDir}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
