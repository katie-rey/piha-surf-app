import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import {
  FaCloud,
  FaMapMarkerAlt,
  FaWind,
  FaWater,
  FaArrowLeft,
  FaCloudRain,
  FaCloudShowersHeavy,
  FaCloudSun,
  FaCloudSunRain,
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
  const [desc1, setDesc1] = useState(null)
  const [desc2, setDesc2] = useState(null)
  const [desc3, setDesc3] = useState(null)
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
        setDesc1(response.data.data.weather[1].hourly[0].weatherDesc[0].value)
        setDesc2(response.data.data.weather[1].hourly[0].swellHeight_m)
        setDesc3(response.data.data.weather[1].hourly[0].swellDir16Point)
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

  const d1 = new Date().toDateString()
  console.log(d1)

  // logic for todays weather icon

  console.log(typeof desc)
  const descString = JSON.stringify(desc)
  console.log(typeof descString)

  function weatherIcon() {
    if (descString.includes('rain')) {
      return <FaCloudShowersHeavy />
    } else if (descString.includes('sun' && !'cloud')) {
      return <FaSun />
    } else if (descString.includes('cloudy' && 'sun')) {
      return <FaCloudSun />
    } else if (descString.includes('cloudy' && !'sun')) {
      return <FaCloud />
    } else return <FaCloud />
  }

  // logic for tomorrows weather icon

  console.log(typeof desc)
  const desc1String = JSON.stringify(desc1)
  console.log(typeof descString1)

  function weatherIcon1() {
    if (desc1String.includes('rain')) {
      return <FaCloudShowersHeavy />
    } else if (descString.includes('sun' && !'cloud')) {
      return <FaSun />
    } else if (descString.includes('cloudy' && 'sun')) {
      return <FaCloudSun />
    } else if (descString.includes('cloudy' && !'sun')) {
      return <FaCloud />
    } else return <FaCloud />
  }

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
                  {weatherIcon()}&nbsp;
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
            <FaWind className="fawind" />
          </div>
          <div className="surf-row">
            {windSpeed}
            {''}&nbsp;km/h
          </div>
          <div className="surf-row">{windDir}</div>
        </div>

        {/* Surf data  */}

        <div className="surf-container">
          <div className="surf-row-container">
            <div className="surf-row-image">
              <img
                src="/assets/wave-white.png"
                alt="..."
                className="img-thumbnail"
              />
            </div>
            <div className="surf-col-swell">
              {' '}
              {swellHeight}
              {''}&nbsp;m
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
            {/* <div className="surf-row">
              <img
                src="/assets/waves.png"
                alt="..."
                className="img-thumbnail"
              />
            </div> */}
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

        <div className="row-forecast-container">
          <div className="forecast-row-small">Tomorrow</div>
          {/* <div className="forecast-row">{desc1}</div> */}
          <div className="forecast-row-middle">{weatherIcon1()}</div>
          <div className="forecast-row-middle">{desc2} &nbsp;m</div>
          <div className="forecast-row">{desc3}</div>
        </div>
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
