import React, { useState, useEffect } from 'react';
import Shimer from './Shimmer';
import { useParams } from 'react-router-dom';
import { Menu_URL , Menu_URL_END } from '../utils/Constants';

const ResMenuCard = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu,setResMenu]=useState(null);
  const {resId} = useParams();
 

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(`${Menu_URL}${resId}&${Menu_URL_END}`);
      const json = await data.json();
      console.log("Menu data fetched ..json is", json);
      setResInfo(json?.data?.cards[2]?.card?.card?.info);
    
      console.log("resMenu array is",json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
      setResMenu(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    
    
    } 
    
    
    catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  console.log("resInfo is", resInfo);

  return resInfo === null ? <Shimer /> : (
    <div className='ml-5 mr-5 px-5 py-5'>
      <h1>{resInfo.name}</h1>
      <h2>{resInfo.avgRating}</h2>
      <h2>{resInfo.costForTwoMessage}</h2>
      <br />
      <h2>{resInfo.cuisines ? resInfo.cuisines.join(", ") : "No cuisines available"}</h2>
      <h2 className='font-bold'>MENU</h2>
      <hr></hr>
      <ul>
        {resMenu.map((item)=>
        {
          return <li 
          className='px-5 py-5 bg-gray-300 border-gray-300 rounded-md overflow-hidden transition duration-300 
          ease-in-out transform hover:scale-105 w-full max-w-xs mt-6'
          key={item.card.info.id}>
        {item.card.info.name}-₹{item.card.info.price/100}</li>
        })}
      </ul>
    </div>
  );
};

export default ResMenuCard;
