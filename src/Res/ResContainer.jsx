
import ResCard from './ResCard';
import Shimmer from '../Component/Shimmer';
import { useState, useEffect } from 'react';

const ResContainer = () => {
  
   const [newRes,setNewRes]=useState([])
   const fetchData=async ()=>
   {
    try {
     const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")
     const json = await data.json()

     //optional chaining
     let test=json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
     setNewRes(test)
     console.log(test)
    }
    catch(error)
    {
      console.error("Error fetching data:",error)
    }
  }

   useEffect(()=>{
    fetchData()
   }, []) ;//useEffect will get applid once the component is mounted/rendered

   
   const handleClick =()=>
   {
       const filteredList = newRes.filter((item) => item.info.avgRating >4 )
       console.log(filteredList);
       setNewRes(filteredList)
   }

    return (newRes.length===0)?<div><Shimmer/></div>
    :
    (
    <div className='bg-gray-800 p-8 sm:p-12 lg:p-16'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      <button 
        onClick={handleClick}
        className="bg-blue-500 p-2 m-2 hove hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
         Filter Top Restaurant
        </button>
       
         {
          Array.isArray(newRes) &&
         newRes.map((eachRes) =>
         (
          <ResCard key={eachRes.info.id} resData={eachRes} />
         ))}

      </div>
    </div>
  )
};

export default ResContainer;
