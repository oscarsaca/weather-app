import WeatherInfoHeader from './weather-info-header';
import WeatherInfoNow from './weather-info-now';
import WeatherInfoResults from './weather-info-results';
import WeatherForecast from '../weather-forecast/weather-forecast';

function WeatherInfoContainer({ locationName, country, temp, weatherDescription }) {
    return (
        <div className='weather-container'>
            <WeatherInfoHeader 
                city={locationName} 
                country={country} 
                day="Saturday"
                month="Janury"
                monthDay="16th"
                />
            <WeatherInfoNow temp={temp} weatherDescription={weatherDescription}/>
            <WeatherInfoResults/>
            <WeatherForecast forecastTitle='Forecast'/>
        </div>
    );
}

export default WeatherInfoContainer;