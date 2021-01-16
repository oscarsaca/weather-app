import React from 'react';
import bg from '../images/app-bg.jpg'

function WeatherBg({altText}) {
    return (
        <React.Fragment>
            <picture>
                 <img src={bg} alt={altText}/>
            </picture>
        </React.Fragment>
    );
}

export default WeatherBg;