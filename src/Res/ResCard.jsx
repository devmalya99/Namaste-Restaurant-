
const ResCard = ({resData}) => {
  const {name, cuisines, avgRating, costForTwo,cloudinaryImageId} = resData.info
  const {deliveryTime} = resData.info.sla
  return (
    <div className='bg-transparent  border-gray-300 rounded-md overflow-hidden transition duration-300 
    ease-in-out transform hover:scale-105 w-full max-w-xs mt-6'>
          <img
              className='w-full h-32 object-cover'
              src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ cloudinaryImageId}
              alt='' />
          <div className='p-4'>

              <h3 className='text-white text-xl font-bold mb-2'>{name}</h3>
              <h4 className='text-white font-semibold'>✪ {avgRating}-{deliveryTime}min</h4>
              <h4 className='text-white'>{cuisines.join(', ')}</h4>
              <h4 className='text-white'>Cost: {costForTwo}</h4>

          </div>
      </div>
      
  );
}

export default ResCard;
