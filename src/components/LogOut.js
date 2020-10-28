import React from 'react'
import {Redirect} from 'react-router-dom'

const LogOut = props => {

  const handleClick = () => {
    if (props.userId) {
      props.logOut(props.userId)
    }
  }

  return (
    <div>
      <br />
      <button className="cool-button" onClick={handleClick}>
        Log Out
      </button>
    </div>
  )
}

export default LogOut