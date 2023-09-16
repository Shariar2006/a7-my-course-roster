import PropTypes from 'prop-types'
import { FaDollarSign, FaRegBookmark } from 'react-icons/fa';

const Card = ({card}) => {
    const {Cover, Title, Description, Price, Reading_Time} = card
  return (
    <div className='p-4 bg-slate-50 rounded-lg w-[312px]'>
        <img src={Cover} alt="" />
        <h1 className='text-lg font-semibold my-3'>{Title}</h1>
        <p className='text-gray-500'>{Description}</p>
        <div className='flex justify-between my-3'>
                <span className='flex items-center text-gray-500'><FaDollarSign></FaDollarSign> Price: {Price}</span>
                <span className='flex items-center text-gray-500'><FaRegBookmark></FaRegBookmark>Credit: {Reading_Time}hr</span>
        </div>
        <button className='bg-[#2F80ED] text-white text-center py-2 px-[119px] rounded-lg'>Select</button>
    </div>
  )
}

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card;
