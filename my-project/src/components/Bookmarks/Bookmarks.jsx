import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className="text-2xl font-medium">Course Name: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmarks => <Bookmark key={bookmarks.Id} bookmark={bookmarks}></Bookmark>)
            }
            
        </div>
    )
}

Bookmarks.propTypes ={
    bookmarks: PropTypes.array
}

export default Bookmarks