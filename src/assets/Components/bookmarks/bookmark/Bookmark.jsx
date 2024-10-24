import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {tittle} = bookmark
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h2 className='text-3xl'>{tittle}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark:PropTypes.array
};

export default  Bookmark;