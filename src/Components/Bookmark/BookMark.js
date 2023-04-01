import React from 'react';
import SpenTime from '../SpentTime/SpenTime';
import Cart from '../Cart/Cart';

const BookMark = (props) => {
    return (
        <div>
            <SpenTime
            spentime={props.spentime}
            ></SpenTime>
            <div>
                <Cart
                BookMark={props.bmarks}
                ></Cart>
            </div>
        </div>
    );
};

export default BookMark;