import React from 'react';

const WeatherForecastHour = ({ forecastList }) => {

    const forecastItems = forecastList.forEach((item) => {
        const items = [
            {   
                key: item.dt,
                hour: item.dt_txt.slice(11, 13) * 1,
                icon: `https://openweathermap.org/img/w/${item.weather[0].icon}.png`,
                temp: Math.floor(item.main.temp * 1) / 1,
            }
        ]
        return items
    })

    console.log(forecastItems)

    return (
        <div></div>
    );
}

export default WeatherForecastHour;