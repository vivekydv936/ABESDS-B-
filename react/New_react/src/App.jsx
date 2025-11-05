import React from 'react'

import Navbar from './Component/Navbar'
import './App.css'
import Card from './Component/card'
import Count from './Component/Count'

const App = () => {
  return (
    
      
      <div id='card'>
        <br />
        {/* <Card name='mohan' edu='10 class' />
        <br />
        <Card name='sohan' edu='12 class' />
        <br />
        <Card name='rohan' edu='btech' /> */}
        <Count/>
      </div>
    
  )
}

export default App