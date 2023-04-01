import React from 'react';
import SpenTime from '../SpentTime/SpenTime';
import Cart from '../Cart/Cart';

const BookMark = ({bookMarks,spentime}) => {
    // console.log();
    return (
        <div>
            <SpenTime
            spentime={spentime}
            ></SpenTime>
            <div>
                <Cart
                bookMarks={bookMarks}
                ></Cart>
            </div>
        </div>
    );
};

export default BookMark;