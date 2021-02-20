import React from 'react';

const WeatherForecastHour = ({ forecastList }) => {

    const forecastItems = forecastList.forEach((item, index) => {
        return [
            {   
                key: index,
                hour: item.dt_txt.slice(11, 13) * 1,
                icon: `https://openweathermap.org/img/w/${item.weather[0].icon}.png`,
                temp: Math.floor(item.main.temp * 1) / 1,
            }
        ]
    })

    let itemsToRender;
    if (forecastList) {
        itemsToRender = forecastItems.map((key, hour, icon, temp) => {
            return <li className='frosted-bg tac' id={key}>
                <span>{hour}:00</span>
                <img src={icon} alt=''/>
                <strong>{temp}</strong>
            </li>
        });
    } else {
        itemsToRender = "Loading..."
    }

    return (
        <>
            {itemsToRender}
        </>
    );
}

export default WeatherForecastHour;