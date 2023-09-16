import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {Title, Reading_Time} = bookmark
    return (
        <div>
            <ol>
                <li className='text-gray-500'>{Title}</li>
            </ol>
            <h3>Total Credit Hour : {Reading_Time} </h3>

        </div>
    )
}

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark