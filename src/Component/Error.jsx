import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  
    let err=useRouteError();
    console.log(err);

return (

  <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex items-center justify-center text-white">
    <div className="text-center">
      <h1 className="text-7xl font-bold mb-5 animate-pulse">Oops!</h1>
      <p className="text-4xl mb-5">We encountered an error {err.status}</p>
      <h3>{err.error.message}</h3>
      <p className="text-2xl mb-5">Don't worry, our team is on it!</p>
      
      <a href="http://localhost:5173/" className="px-4 py-2 rounded bg-white text-purple-600 font-bold">Return Home</a>
    </div>
  </div>
)
}

export default Error;