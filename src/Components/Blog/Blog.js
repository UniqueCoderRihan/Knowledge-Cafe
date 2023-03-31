import React from 'react';
import './Blog.css';

const Blog = (props) => {
    console.log(props);
    const { img, title, author, id, authorImg, tag, publisheDate, Readtime } = props.blog;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <div>
                        <div className='author'>
                            <img className='w-10 rounded-full' src={authorImg} alt="" />
                            <div>
                                <p>{author}</p>
                                <p>{publisheDate}</p>
                            </div>
                            <div className='blogInfo'>
                                <p>{Readtime} Min Read <span>add</span> </p> 
                            </div>
                        </div>
                    </div>
                    <h2 className="card-title justify-start">
                        {title}
                        {/* <div className="badge badge-secondary">BookMark</div> */}
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">{tag.secound}</div>
                        <div className="badge badge-outline">{tag.frist}</div>
                    </div>
                    <p className='text-cyan-500'>Marks As Read</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;