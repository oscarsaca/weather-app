import './App.css';
import './components/weather-bg'
import React, { useState } from 'react';
import HeaderContainer from './components/weather-header/header-container';
import WeatherBg from './components/weather-bg';
import PageTitle from './components/page-title';
import WeatherInfoContainer from './components/weather-info/weather-info-container';
import Axios from 'axios';

function App() {

  const [value, setValue] = useState('')
  const [locationName, setLocationName] = useState('')
  const [country, setCountry] = useState('')
  const [temp, setTemp] = useState('')
  const [weatherDescription, setWeatherDescription] = useState('')
  const [feelsLike, setfeelsLike] = useState('')
  const [humidity, setHumidity] = useState('')
  const [high, setHigh] = useState('')
  const [low, setLow] = useState('')
  const [wind, setWind] = useState('')
  const [pressure, setPressure] = useState('')

  const [theDate, setTheDate] = useState('')

  const [hasWeather, setHasWeather] = useState(false)
  
  const body = document.body

  const loadedBody = () => {
    body.classList.add('loaded')
  }

  const getValueFromInput = (event) => {
    setValue(event.target.value)
  }

  const getTheDate = () => {
    const date = new Date()
    const months = {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December'
    }
    const monthIndex = date.getMonth()
    const month = months[monthIndex]
    const weekDays = {
      0: 'Sunday',
      1: 'Monady',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
    }
    const weekDaysIndex = date.getDay()
    const weekDay = weekDays[weekDaysIndex]
    const suffixs = {
      0: '',
      1: 'st',
      2: 'nd',
      3: 'rd',
      4: 'th',
      5: 'th',
      6: 'th',
      7: 'th',
      8: 'th',
      9: 'th',
      10: 'th',
      11: 'th',
      12: 'th',
      13: 'th',
      14: 'th',
      15: 'th',
      16: 'th',
      17: 'th',
      18: 'th',
      19: 'th',
      20: 'th',
      21: 'st',
      22: 'nd',
      23: 'rd',
      24: 'th',
      25: 'th',
      26: 'th',
      27: 'th',
      28: 'th',
      29: 'th',
      30: 'th',
      31: 'st',
    }
    const day = date.getDate()    
    const suffix = suffixs[day]
    const yourDate = `${weekDay}, ${month} ${day}${suffix}`
    setTheDate(yourDate)
  }


  const getWeather = (event) => {   
    event.preventDefault()

    const VALUE = value
    const KEY = 'a1a5b6654de7c4687ddd592a0d166af5'
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${VALUE}&APPID=${KEY}&units=imperial`

    Axios.get(WEATHER_URL)
      .then((response) => {
        console.log(response.data)
        setLocationName(response.data.name)
        setCountry(`, ${response.data.sys.country}`)
        setTemp(`${Math.round(response.data.main.temp)}°`)
        setWeatherDescription(response.data.weather[0].main)
        setfeelsLike(Math.round(response.data.main.feels_like))
        setHumidity(`${response.data.main.humidity}%`)
        setHigh(`${response.data.main.temp_max}°`)
        setLow(`${response.data.main.temp_min}°`)
        setWind(`${Math.round(response.data.wind.speed)}mph`)
        setPressure(Math.round(response.data.main.pressure))
        setHasWeather(true)
        loadedBody()
        getTheDate()
      }).catch(error => {
        console.log(`Error: ${error}`)
      })

  }

  return (
    <React.StrictMode>
      <WeatherBg altText="Weather Background Image"/>
      <PageTitle title="Weather App"/>
      <HeaderContainer 
        getWeather={getWeather} 
        getValueFromInput={getValueFromInput}/>
        { 
        hasWeather ? 
          <WeatherInfoContainer 
            locationName={locationName} 
            country={country} 
            temp={temp} 
            theDate={theDate}
            feelsLike={feelsLike}
            humidity={humidity}
            wind={wind}
            high={high}
            low={low}
            pressure={pressure}
            weatherDescription={weatherDescription}/> 
        : null 
        }
    </React.StrictMode>
  );
}

export default App;