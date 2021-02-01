import React from 'react';
import WeatherForecastList from './weather-forecast-list';

const WeatherForecast = ({ forecastTitle }) => {
    return (
        <div className='weather-forecast'>
            <strong>{forecastTitle}</strong>
            <WeatherForecastList />
        </div>
    );
}

export default WeatherForecast;