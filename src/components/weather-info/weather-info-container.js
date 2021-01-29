import WeatherInfoHeader from './weather-info-header';
import WeatherInfoNow from './weather-info-now';
import WeatherInfoResults from './weather-info-results';

function WeatherInfoContainer() {
    return (
        <div className='weather-container'>
            <WeatherInfoHeader 
                city="Santa Clarita" 
                country="US" 
                day="Saturday"
                month="Janury"
                monthDay="16th"
                />
            <WeatherInfoNow/>
            <WeatherInfoResults/>
        </div>
    );
}

export default WeatherInfoContainer;