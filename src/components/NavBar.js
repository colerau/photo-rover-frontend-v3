import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = props => {
  return (
    <div>
      <Link to="/" className="App-link" style={{paddingRight: "300px"}}><img src="https://pngimg.com/uploads/mars_planet/mars_planet_PNG23.png" alt="Home" style={{height: "60px"}}/></Link>

      {props.userId ? <Link to={`/users${props.userId}/photos`} className="App-link" style={{paddingRight: "50px"}}>Saved Photos</Link> : <React.Fragment style={{paddingRight: "50px"}}> </React.Fragment>}

      <Link to="/new-earth-date" className="App-link" style={{paddingRight: "50px"}}>New Earth Date</Link>
      <Link to="/signup" className="App-link" style={{paddingRight: "50px"}}>Sign Up</Link>
      <Link to="/login" className="App-link" style={{paddingRight: "50px"}}>Log In</Link>
      <Link to="/logout" className="App-link" style={{paddingRight: "50px"}}>Log Out</Link>
      <Link to="/delete-account" className="App-link">Delete Account</Link>
    </div>
  )
}

export default NavBar;