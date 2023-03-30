import React from 'react';
import Blog from '../Blog/Blog';
import BookMark from '../Bookmark/BookMark';
import './Container.css';

const Container = () => {
    return (
        <div>
            <div className='bodyContainer'>
                <Blog></Blog>
                <BookMark></BookMark>
            </div>
        </div>
    );
};

export default Container;