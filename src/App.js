import './App.css';
import './components/weather-bg'
import React from 'react';
import HeaderContainer from './components/weather-header/header-container';
import WeatherBg from './components/weather-bg';
import PageTitle from './components/page-title';

function App() {
  return (
    <React.StrictMode>
      <WeatherBg altText="Weather Background Image"/>
      <PageTitle title="Weather App"/>
      <HeaderContainer/>
    </React.StrictMode>
  );
}

export default App;