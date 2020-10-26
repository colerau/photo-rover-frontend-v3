import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = props => {
  return (
    <div>
      <Link to="/" className="App-link" style={{paddingRight: "50px"}}><img src="https://pngimg.com/uploads/mars_planet/mars_planet_PNG23.png" alt="Home" style={{height: "60px"}}/></Link>
      <Link to="/signup" className="App-link" style={{paddingRight: "50px"}}>Sign Up</Link>
      <Link to="/login" className="App-link" style={{paddingRight: "50px"}}>Log In</Link>
      <Link to="/new-earth-date" className="App-link" style={{paddingRight: "50px"}}>More Photos</Link>
        
    </div>
  )
}

export default NavBar;