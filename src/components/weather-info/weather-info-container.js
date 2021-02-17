import WeatherInfoHeader from './weather-info-header';
import WeatherInfoNow from './weather-info-now';
import WeatherInfoResults from './weather-info-results';
import WeatherForecast from '../weather-forecast/weather-forecast';

function WeatherInfoContainer({ 
    locationName, 
    country, 
    temp, 
    weatherDescription, 
    theDate,  
    feelsLike,
    humidity,
    wind,
    high,
    low,  
    pressure
}) {
    return (
        <div className='weather-container'>
            <WeatherInfoHeader 
                city={locationName} 
                country={country} 
                theDate={theDate}
                />
            <WeatherInfoNow temp={temp} weatherDescription={weatherDescription}/>
            <WeatherInfoResults
                feelsLike={feelsLike}
                humidity={humidity}
                wind={wind}
                high={high}
                low={low}
                pressure={pressure}            
            />
            <WeatherForecast forecastTitle='Forecast'/>
        </div>
    );
}

export default WeatherInfoContainer;