import React from 'react';
import SpenTime from '../SpentTime/SpenTime';

const BookMark = (spentime) => {
    return (
        <div>
            <SpenTime
            spentime={spentime}
            ></SpenTime>
            <div>
                <h3>Hello Sir Wait Please</h3>
            </div>
        </div>
    );
};

export default BookMark;