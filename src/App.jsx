import { useState } from 'react'
import Header from './Header'
import './App.css'
import SearchBar from './SearchBar'
import ResContainer from  './Res/ResContainer'
import Footer from './Footer'

const App = ()=> {

  return (
    <div>
      <Header/>
      <div className="body">
       
        <ResContainer/>
        <Footer/>
      </div>   
    </div>
  )
}

export default App
