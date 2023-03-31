import React from 'react';
import SpenTime from '../SpentTime/SpenTime';

const BookMark = (spentime) => {
    return (
        <div>
            <SpenTime
            spentime={spentime}
            ></SpenTime>
        </div>
    );
};

export default BookMark;