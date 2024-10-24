import PropTypes from 'prop-types';
import Bookmark from './bookmark/Bookmark';


const Bookmarks = ({mark}) => {
    return (
        <div className="md: w-1/3">
            <h2 className="text-4xl">BookMarks Blog:{mark.length}</h2>
            {
                mark.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark> )

            }
          
        </div>
    );
};

Bookmarks.propTypes = {
    mark:PropTypes.array
};

export default Bookmarks;