import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';

const Container = () => {
    const [blogs, setBlog] = useState([]);
    // const [bookMarked, setBookMarked] = useState([]);
    
    useEffect( ()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setBlog(data))
    },[])
    return (
        <div>
            {
                blogs.map(blog => <Blog
                key={blog.id}
                blog = {blog}
                ></Blog> )
            }
        </div>
    );
};

export default Container;