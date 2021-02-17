function WeatherInfoHeader({city, country, theDate}) {
    return (
        <div className='weather-header'>
            <strong>{city}{country}</strong>
            <span>{theDate}</span>
        </div>
    );
}

export default WeatherInfoHeader;