import './App.css';
import './components/weather-bg'
import React from 'react';
import HeaderContainer from './components/weather-header/header-container';
import WeatherBg from './components/weather-bg';
import PageTitle from './components/page-title';
import WeatherInfoContainer from './components/weather-info/weather-info-container';
import Axios from 'axios';

function App() {

  const getWeather = () => {   

    const VALUE = 'Santa+Clarita'
    const KEY = 'a1a5b6654de7c4687ddd592a0d166af5'
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${VALUE}&APPID=${KEY}&units=imperial`

    Axios.get(WEATHER_URL)
      .then((response) => {
        console.log(response.data)
      }).catch(error => {
        console.log(`Error: ${error}`)
      })

  }

  getWeather()

  return (
    <React.StrictMode>
      <WeatherBg altText="Weather Background Image"/>
      <PageTitle title="Weather App"/>
      <HeaderContainer/>
      <WeatherInfoContainer/>
    </React.StrictMode>
  );
}

export default App;