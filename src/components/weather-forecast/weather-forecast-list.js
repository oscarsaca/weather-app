import React from 'react';
import WeatherForecastHour from './weather-forecast-hour';

const WeatherForecastList = ({ forecastList }) => {
    return (
        <ul>
            <WeatherForecastHour forecastList={forecastList}/>
        </ul>
    );
}

export default WeatherForecastList;