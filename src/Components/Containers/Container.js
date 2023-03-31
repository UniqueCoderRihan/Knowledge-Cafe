import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import './Container.css'
import BookMark from '../Bookmark/BookMark';

const Container = (handleReadTime) => {
    // console.log(handleReadTime);
    const [blogs, setBlog] = useState([]);
    // const [bookMarked, setBookMarked] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div className='bodyContainer'>
            <div className='blog-container'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleReadTime={handleReadTime}
                    ></Blog>)
                }
            </div>
            <div className='bookmarkContainer'>
                <BookMark></BookMark>
            </div>
        </div>
    );
};

export default Container;