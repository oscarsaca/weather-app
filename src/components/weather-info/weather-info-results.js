function WeatherInfoResults ({
    feelsLike,
    humidity,
    wind,
    high,
    low,  
    pressure
}) {
    return(
        <div className='weather-results frosted-bg half'>
            <ul>
                <li>
                    <strong>{high}</strong>
                    <span>High</span>
                </li>
                <li>
                    <strong>{feelsLike}</strong>
                    <span>Feels Like</span>
                </li>
                <li>
                    <strong>{wind}</strong>
                    <span>Wind</span>
                </li>
                <li>
                    <strong>{low}</strong>
                    <span>Low</span>
                </li>
                <li>
                    <strong>{humidity}</strong>
                    <span>Humidity</span>
                </li>
                <li>
                    <strong>{pressure}</strong>
                    <span>Pressure</span>
                </li>
            </ul>
        </div>
    );
}

export default WeatherInfoResults;