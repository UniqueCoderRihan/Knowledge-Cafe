import React, { useEffect, useState } from 'react';

const Cart = (props) => {
    // console.log(props);
    const {BookMark} = props;
    

    return (
        <div>
            <h2 className='text-2xl font-blod border-4 p-2 mt-3'>BookMarked Blogs {props.BookMark.length /2} Blogs</h2>
            <p className='text-2xl font-semibold border-4 mt-3'> </p>
        </div>
    );
};

export default Cart;