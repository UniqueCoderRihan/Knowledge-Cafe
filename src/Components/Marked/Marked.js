import React from 'react';

const Marked = (props) => {
    console.log(props.single);
    const {single} = props;
    return (
        <div>
            <h3 className='text-2xl border-4 border-b-orange-500 mt-3'>{single.title}</h3>
        </div>
    );
};

export default Marked;