import './App.css';
import './components/weather-bg'
import React from 'react';
import HeaderContainer from './components/header-container';
import WeatherBg from './components/weather-bg';

function App() {
  return (
    <React.StrictMode>
      <WeatherBg altText="Weather Background Image"/>
      <HeaderContainer/>
    </React.StrictMode>
  );
}

export default App;