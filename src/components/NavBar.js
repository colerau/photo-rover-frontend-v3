import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = props => {
  return (
    <div>
      <Link to="/" className="App-link" style={{paddingRight: "200px"}}><img src="https://pngimg.com/uploads/mars_planet/mars_planet_PNG23.png" alt="Home" style={{height: "60px"}}/></Link>

      {props.userId ? <Link to={`/users/${props.userId}/photos`} className="App-link" style={{paddingRight: "50px"}}>Saved Photos</Link> : <React.Fragment style={{paddingRight: "50px"}}> </React.Fragment>}

      <Link to="/new-earth-date" className="App-link" style={{paddingRight: "50px"}}>New Earth Date</Link>
      <Link to="tutorial" className="App-link" style={{paddingRight: "50px"}}>Tutorial</Link>

      {!props.userId ? <Link to="/signup" className="App-link" style={{paddingRight: "50px"}}>Sign Up</Link> : <React.Fragment style={{paddingRight: "50px"}}> </React.Fragment>}

      {!props.userId ? <Link to="/login" className="App-link" style={{paddingRight: "50px"}}>Log In</Link> : <React.Fragment style={{paddingRight: "50px"}}> </React.Fragment>}

      {props.userId ? <Link to="/logout" className="App-link" style={{paddingRight: "50px"}}>Log Out</Link> : <React.Fragment style={{paddingRight: "50px"}}> </React.Fragment>}

      {props.userId ? <Link to="/delete-account" className="App-link">Delete Account</Link> : <React.Fragment style={{paddingRight: "50px"}}> </React.Fragment>}
    </div>
  )
}

export default NavBar;