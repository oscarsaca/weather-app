import React from 'react';
import WeatherForecastList from './weather-forecast-list';

const WeatherForecast = ({ forecastTitle, forecastList }) => {
    return (
        <div className='weather-forecast'>
            <strong>{forecastTitle}</strong>
            <WeatherForecastList forecastList={forecastList} />
        </div>
    );
}

export default WeatherForecast;