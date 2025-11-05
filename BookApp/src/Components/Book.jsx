import React from 'react'
import './Book.css'
import Count from './Counter'
function Book(props) {
  return (
    <div id="book">
        <img src="https://www.bing.com/th/id/OIP.9j0kj9e2UhR1jB6q-9MviAHaEt?w=287&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" height={100} width={100} />
        <h1> Tttle:{props.Title}</h1>
        <h1> Price:{props.Price}</h1>
        <div> <Count/> </div>
    </div>
  )
}

export default Book