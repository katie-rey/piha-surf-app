import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import {
  FaCloud,
  FaMapMarkerAlt,
  FaWind,
  FaWater,
  FaArrowLeft,
  FaCloudRain,
} from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {} from '@fortawesome/free-solid-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
// import { fa-water-arrow-down } from '@fortawesome/free-regular-svg-icons'

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
  const [swellHeight, setSwellHeight] = useState(null)
  const [swellDir, setSwellDir] = useState(null)
  const [precip, setPrecip] = useState(null)
  const [waterTemp, setWaterTemp] = useState(null)
  const [highTideA, setHighTideA] = useState(null)
  const [lowTideA, setLowTideA] = useState(null)
  const [highTideB, setHighTideB] = useState(null)
  const [lowTideB, setLowTideB] = useState(null)

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
        setSwellHeight(response.data.data.weather[0].hourly[0].swellHeight_m)
        setSwellDir(response.data.data.weather[0].hourly[0].swellDir16Point)
        setPrecip(response.data.data.weather[0].hourly[0].precipMM)
        setWaterTemp(response.data.data.weather[0].hourly[0].waterTemp_C)
        setHighTideA(
          response.data.data.weather[0].tides[0].tide_data[0].tideTime
        )

        setLowTideA(
          response.data.data.weather[0].tides[0].tide_data[1].tideTime
        )
        setHighTideB(
          response.data.data.weather[0].tides[0].tide_data[2].tideTime
        )

        setLowTideB(
          response.data.data.weather[0].tides[0].tide_data[3].tideTime
        )
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  // console.log(typeof date)
  // console.log(date)
  // console.log(temp)
  // console.log(minTemp)
  // console.log(desc)

  // const today = Date.now()
  // console.log(today)
  // const newDate = today.toDateString()
  // console.log(newDate)

  const d1 = new Date().toDateString()
  console.log(d1)

  // const d = new Date(date)
  // const d2 = d.slice(0, 11)
  // const { date } = data
  // console.log(d)
  // const newD = d.stringify
  // console.log(typeof d)

  // const newData = JSON.parse(data)
  // console.log(newData)

  // const newData = data.weather
  // console
  //   .log(newData)
  // const newData = { data }

  return (
    <>
      <div className="top-container">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <div className="grid-container"></div>
          </Grid>
          <Grid item xs={8}>
            <div className="grid-container">
              <div className="col-container">
                <div className="row">
                  <FaMapMarkerAlt /> Piha{' '}
                </div>
                <div className="row-large">
                  <FaCloud />
                  {nowTemp}℃
                </div>
                <div className="row">
                  L {''} {minTemp}℃ / {temp}℃ {''} H
                </div>
                <div className="row">{desc}</div>
                {/* <div className="row">{d1}</div> */}
              </div>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div className="grid-container"></div>
          </Grid>
        </Grid>
      </div>

      {/* Wind data  */}

      <div className="container">
        <div className="row-container">
          <div className="surf-row">
            <FaWind />
          </div>
          <div className="surf-row">
            {windSpeed}
            {''}kmph
          </div>
          <div className="surf-row">{windDir}</div>
        </div>

        {/* Surf data  */}

        <div className="surf-container">
          <div className="surf-row-container">
            <div className="surf-row-image">
              <img
                src="/assets/waves2.jpeg"
                alt="..."
                className="img-thumbnail"
              />
            </div>
            <div className="surf-col-swell">
              {' '}
              {swellHeight}
              {''}m
            </div>
            <div className="surf-col"> {swellDir}</div>
          </div>
          {/* <div className="surf-row-container">
            <div className="surf-row">
              <FaWater />
            </div>
            <div className="surf-row">{waterTemp}℃</div>

            <div className="surf-row">
              <FaCloudRain />
            </div>
            <div className="surf-row">{precip}mm</div>
          </div> */}

          {/* Tide data  */}

          <div className="tide-row-container">
            <div className="surf-row">
              <img
                src="/assets/waves.png"
                alt="..."
                className="img-thumbnail"
              />
            </div>
            <div className="tide-row">H</div>
            <div className="tide-row-col">
              <div className="tide-col">{highTideA}</div>
              <div className="tide-col">{lowTideA}</div>
            </div>
            <div className="tide-row">L</div>
            <div className="tide-row-col">
              <div className="tide-col">{highTideB}</div>
              <div className="tide-col">{lowTideB}</div>
            </div>
          </div>
        </div>
        {''}

        {/* Three Day Forecast  */}

        {/* <div className="row-container">
          <div className="surf-row">
            <FaCloud />
          </div>
          <div className="surf-row">
            {' '}
            <FaCloud />
          </div>
          <div className="surf-row">
            {' '}
            <FaCloud />
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Home

// <div className="surf-row-container">
//             <div className="surf-row">
//               <FaWater />
//             </div>
//             <div className="surf-row">{waterTemp}℃</div>

//             <div className="surf-row">
//               {/* <FontAwesomeIcon icon={fa-water-arrow-down} /> */}
//             </div>
//             <div className="surf-row">{precip}mm</div>
//           </div>
