import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import './Container.css'
import BookMark from '../Bookmark/BookMark';

const Container = (props) => {
    // console.log(props.addMark);
    const [blogs, setBlog] = useState([]);
    
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
                        handleReadTime={props.handleReadTime}
                        addMark={props.addMark}
                    ></Blog>)
                }
            </div>
            <div className='bookmarkContainer'>
                <BookMark
                spentime={props.spentime}
                bookMarks={props.bookMarks}
                
                ></BookMark>
            </div>
        </div>
    );
};

export default Container;