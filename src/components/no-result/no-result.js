import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

const NoResult = () => {
    return (
        <div className='no-result frosted-bg'>
            <FontAwesomeIcon icon={faFrown} />
            <strong>Sorry, the specified city was not found.</strong>
        </div>
    );
}

export default NoResult;