import React from 'react';
import './Blog.css';
import { blogs } from '../../portfolio';
import BlogCard from '../BlogCard/BlogCard';

function Blog() {
    const Fade = require('react-reveal/Fade');
    return (
        <section className="section--blog" id="blog">
            <div className="inner">
                
                <div className="blog-title">
                    <p>{blogs.title}</p>
                </div>

                <div className="blog-subtitle">
                    <p>{blogs.subTitle}</p>
                </div>

                <Fade bottom duration={800}>
                <div className="blog-content">
                    {blogs.lists.map((list, i) => {
                        return <BlogCard blogs={list} key={i} />;
                    })}
                </div>
                </Fade>
                
            </div>
        </section>
    );
}
export default Blog;