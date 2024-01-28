import React from 'react';
import resList from './Restaurants';
const ResCard = (props) => {
  const {name, cuisines, avgRating, costForTwo,cloudinaryImageId} = props.resdata.data
  return (
    <div className='bg-white border border-gray-300 rounded-md overflow-hidden transition duration-300 
    ease-in-out transform hover:scale-105 w-full max-w-md mt-4'>
          <img
              className='w-full h-32 object-cover'
              src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ cloudinaryImageId}
              alt='' />
          <div className='p-4'>

              <h3 className='text-xl font-semibold mb-2'>{name}</h3>
              <h4 className='text-gray-600'>{cuisines.join(', ')}</h4>
              <h4 className='text-gray-600'>{avgRating}</h4>
              <h4 className='text-gray-600'>Cost for Two: {costForTwo/100}₹</h4>

          </div>
      </div>
      
  );
}

export default ResCard;
