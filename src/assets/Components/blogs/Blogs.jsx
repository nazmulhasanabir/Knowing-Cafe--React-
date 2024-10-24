import { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({HandleAddToBookMark, HandleMarkAsRead}) => {
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
                    key={blogs.id} blog={B}
                    HandleAddToBookMark={HandleAddToBookMark}
                    HandleMarkAsRead={HandleMarkAsRead}
                     ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    HandleAddToBookMark: PropTypes.func.isRequired,
    HandleMarkAsRead: PropTypes.func.isRequired,
}

export default Blogs