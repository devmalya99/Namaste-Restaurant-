import React from 'react';
import ResCard from './ResCard';
import resList from '../utils/Restaurants';

const ResContainer = () => {
  
  return (
    <div className='bg-gray-800 p-8 sm:p-12 lg:p-16'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
       
         {resList.map((eachRes,index) =>
         (
          <ResCard key={eachRes.data.id} resdata={eachRes} />
         ))
}
















       {/* This is working
        <ResCard 
           resdata={resList[0]}
        />
        <ResCard 
           resdata={resList[1]}
        />
        <ResCard 
           resdata={resList[2]}
        />
        <ResCard 
           resdata={resList[3]}
        />
        <ResCard 
           resdata={resList[4]}
        />
        <ResCard 
           resdata={resList[5]}
        /> */}

      </div>
    </div>
  );
};

export default ResContainer;
