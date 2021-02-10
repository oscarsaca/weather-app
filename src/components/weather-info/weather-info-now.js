import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';

const WeatherInfoNow = ({ temp, weatherDescription }) => {  

    return (
        <div className='weather-now half'>
            <div className='weather-now-icon half'>
                 { weatherDescription === 'Thunderstorm' ? <FontAwesomeIcon icon={faBolt} /> : null}
                 { weatherDescription === 'Drizzle' ? <FontAwesomeIcon icon={faCloudRain} /> : null}
                 { weatherDescription === 'Rain' ? <FontAwesomeIcon icon={faCloudShowersHeavy} /> : null}
                 { weatherDescription === 'Snow' ? <FontAwesomeIcon icon={faSnowflake} /> : null}
                 { weatherDescription === 'Clear' ? <FontAwesomeIcon icon={faSun} /> : null}
                 { weatherDescription === 'Clouds' ? <FontAwesomeIcon icon={faCloud} /> : null}
                 { weatherDescription === 'Atmosphere' ? <FontAwesomeIcon icon={faSmog} /> : null}
            </div>
            <div className='weather-now-info half'>
                <strong>{temp}</strong>
                <span>{weatherDescription}</span>
            </div>
        </div>
    );
}

export default WeatherInfoNow;