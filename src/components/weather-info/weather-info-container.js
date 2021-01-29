import WeatherInfoHeader from './weather-info-header';
import WeatherInfoNow from './weather-info-now';

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
        </div>
    );
}

export default WeatherInfoContainer;