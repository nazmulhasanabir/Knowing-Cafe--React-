import PropTypes from 'prop-types';
import Bookmark from './bookmark/Bookmark';


const Bookmarks = ({mark , readingTime}) => {
    return (
        <div className="md: w-1/3 bg-slate-300 rounded-2xl mt-6">
            <h2 className="text-4xl">BookMarks Blog:{mark.length}</h2>;
            <h2 className='text-3xl'>Spent time on read:{readingTime}</h2>
            
            {
                mark.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark> )

            }
          
        </div>
    );
};

Bookmarks.propTypes = {
    mark:PropTypes.array,
    readingTime: PropTypes.number,
};

export default Bookmarks;