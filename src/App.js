import './App.css';
import './components/weather-bg'
import React from 'react';
import HeaderContainer from './components/weather-header/header-container';
import WeatherBg from './components/weather-bg';
import PageTitle from './components/page-title';
import WeatherInfoContainer from './components/weather-info/weather-info-container';

      
const fetchData = () => {
  const url = "api.openweathermap.org/data/2.5/forecast?id=524901&appid=a1a5b6654de7c4687ddd592a0d166af5";
  return fetch(url)
    .then(response => response.json())
    .then(parsedJSON => console.log(parsedJSON.results))
    .catch(error => console.log(`error: ${error}`));
}

fetchData()

function App() {
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