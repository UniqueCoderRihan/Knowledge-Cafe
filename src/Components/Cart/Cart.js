import React, { useEffect, useState } from 'react';

const Cart = ({bookMarks}) => {
    // console.log(bookMarks);
    
    return (
        <div>
            <h2 className='text-2xl font-blod border-4 p-2 mt-3'>BookMarked Blogs {bookMarks.length} </h2>
            {/* <p className='text-2xl font-semibold border-4 mt-3'></p> */}
            {
                bookMarks.map(single=>{
                    <h2>{single.title}</h2>
                })
            }
        </div>
    );
};

export default Cart;