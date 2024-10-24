import PropTypes from 'prop-types';
import { IoBookmark } from "react-icons/io5";

const Blog = ({blog, HandleAddToBookMark, HandleMarkAsRead }) => {
    const { cover_img,author,author_img,reading_time,posted_date,hashtags,tittle} = blog;
    return (
        <div className='mb-20 space-y-3'>
            <img className='w-[800px] mb-8' src={cover_img} />
            <div className='flex gap-2 items-center  justify-between'>
                <div className='flex items-center '>
                <img className='w-20' src={author_img}  />
                <div className='ml-6'>
                <h3 className='font-bold'>{author}</h3>
                <p>{posted_date}</p>
                </div>
                
                </div>
                <div>
                <span>{reading_time} min read</span>
                <button
                onClick={() => HandleAddToBookMark(blog) }
                className='ml-2 text-2xl text-red-600'><IoBookmark></IoBookmark></button>
                </div>
            </div>
            <h2 className='text-3xl font-bold my-4'> {tittle}</h2>
            <p>{hashtags}</p>
                <button 
                onClick={()=> HandleMarkAsRead(reading_time)}
                className='text-purple-600 border-purple-600 underline font-bold'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.shape({
      tittle: PropTypes.string.isRequired,
      cover_img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      author_img: PropTypes.string.isRequired,
      reading_time: PropTypes.number.isRequired,
      posted_date: PropTypes.string.isRequired,
      hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
     HandleAddToBookMark: PropTypes.func.isRequired,
      HandleMarkAsRead: PropTypes.func.isRequired,
  };
  
export default Blog;