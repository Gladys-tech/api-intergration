import React from 'react'
import {Link } from "react-router-dom";



function Navigation() {
  return (
    <div className='nav'>
      <h2>e<span>L</span>i<span>t</span></h2>
        <ul >
            {/* <li><Link to=""></Link></li> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/post">Post</Link></li>

        </ul>
    </div>
  )
}

export default Navigation
