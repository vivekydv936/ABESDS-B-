import React from 'react'
import Book from './Components/Book'
import './App.css'
import Navbar from './Components/Navbar'
function App() {
  return (
    <div id="adi">
        {/* <Navbar/> */}
        <Book Title ="math" Price ="250" /> <br />
        <Book Title ="Physics" Price ="270" /> <br />
        <Book Title ="Chemistry" Price ="300" /> <br />
        
    </div>
  )
}

export default App