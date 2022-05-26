import React, { useContext } from 'react'
import {Link } from "react-router-dom";
import { DataCreateContext } from '../../App';



function Navigation() {

  const info = useContext(DataCreateContext);
  console.log(info);
  return (
    <div className='nav'>
      <h2>e<span>L</span>i<span>t</span></h2>
        <ul >
            {/* <li><Link to=""></Link></li> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/post">Post</Link></li>
            <li><Link to="/login">login</Link></li>
            <li><Link to="/logout">logout</Link></li>
            <li className='mx-2 nav'>{info}</li>

        </ul>
    </div>
  )
}

export default Navigation
