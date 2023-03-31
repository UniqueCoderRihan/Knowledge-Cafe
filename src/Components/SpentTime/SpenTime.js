import React from 'react';
import './SpenTime.css';

const SpenTime = ({spentime}) => {
    const local = localStorage.getItem('ReadTime');

    return (
        <div className='time border-2 border-blue-500 rounded-lg'>
            <h2 className='text-2xl text-center font-semibold'>Total Spen:{local} Min</h2>
        </div>
    );
};

export default SpenTime;