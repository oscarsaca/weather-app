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
  const [hasWeather, setHasWeather] = useState(false)

  const body = document.body

  const loadedBody = () => {
    body.classList.add('loaded')
  }

  const getValueFromInput = (event) => {
    setValue(event.target.value)
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
        setHasWeather(true)
        loadedBody()
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
      { hasWeather ? <WeatherInfoContainer 
        locationName={locationName} 
        country={country} 
        temp={temp} 
        weatherDescription={weatherDescription}/> : null }
    </React.StrictMode>
  );
}

export default App;