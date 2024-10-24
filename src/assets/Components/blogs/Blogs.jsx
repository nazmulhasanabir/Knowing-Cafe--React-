import { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';
const Blogs = ({HandleAddToBookMark}) => {
    const [blogs, setBlogs] =useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(resp=> resp.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div className="md: w-2/3">
            <h2 className="text-4xl">Blogs:{blogs.length} </h2>
            {
                blogs.map(B=> <Blog
                    HandleAddToBookMark={HandleAddToBookMark}
                    key={blogs.id} blog={B} ></Blog>)
            }
        </div>
    );
};

Blogs.PropTypes ={
    HandleAddToBookMark: PropTypes.func
}

export default Blogs