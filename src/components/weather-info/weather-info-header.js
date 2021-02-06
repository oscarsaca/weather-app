function WeatherInfoHeader({city, country, day, month, monthDay}) {
    return (
        <div className='weather-header'>
            <strong>{city}{country}</strong>
            <span>{day}, {month} {monthDay}</span>
        </div>
    );
}

export default WeatherInfoHeader;