import React, { useState, useEffect } from "react";
import ResCard from "./ResCard";
import Shimmer from "../Component/Shimmer";

const ResContainer = () => {
  const [newRes, setNewRes] = useState([]);
  const [filteredRes,setFilteredRes]=useState([]);
  const [searchText,setSearchText]=useState("")

  useEffect(() => {
    fetchData();
  }, []); // useEffect will get applied once the component is mounted/rendered

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setNewRes(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilterClick = () => {
    const filteredList = newRes.filter((item) => item.info.avgRating > 4.1);
    console.log(filteredList);
    setFilteredRes(filteredList);
  };

  const handleSearch =()=>
  {
   const filteredRes= newRes.filter((res)=>
    {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase())
    })
    console.log(searchText)
    setFilteredRes(filteredRes)
  }

  const handleResetClick = () => {
    // Reset the filter
    fetchData();
  };

  return (newRes.length === 0)? (
    <Shimmer />
  ) : (
    <div className="bg-gray-800 p-8 sm:p-12 lg:p-16">
      <div className="flex space-x-4">
        <input type="text" 
        placeholder="Search"
        value={searchText}
        onChange={(e)=>{setSearchText(e.target.value)}}
         />
        <button 
        onClick={handleSearch}
        className="bg-gradient-to-r from-pink-500 to-blue-700 hover:from-blue-700 hover:to-pink-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300">

          Search
        </button>

        <button
          onClick={handleFilterClick}
          className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
        >
          Filter Top Restaurants
        </button>
        <button
          onClick={handleResetClick}
          className="bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-700 hover:to-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-gray-300 transition duration-300"
        >
          Reset Filter
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRes.map((eachRes) => (
          <ResCard key={eachRes.info.id} resData={eachRes} />
        ))}
      </div>
    </div>
  );
};

export default ResContainer;
