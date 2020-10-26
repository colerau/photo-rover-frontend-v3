import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = props => {
  return (
    <div>
      <Link to="/" className="App-link" style={{paddingRight: "30px"}}><img src="https://pngimg.com/uploads/mars_planet/mars_planet_PNG23.png" alt="Home" style={{height: "60px"}}/></Link>
      <Link to="/signup" className="App-link" style={{paddingRight: "30px"}}>Sign Up</Link>

        
    </div>
  )
}

export default NavBar;