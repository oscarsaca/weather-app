import WeatherInfoHeader from './weather-info-header';

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
        </div>
    );
}

export default WeatherInfoContainer;