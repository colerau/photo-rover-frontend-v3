import React from 'react'
// import {Redirect} from 'react-router-dom'

const DeleteAccount = props => {

  const handleClick = () => {
    if (props.userId) {
      props.deleteAccount(props.userId)
      alert("Your account has been deleted")
    }
  }

  return (
    <div>
      <br />
      <button className="cool-button" onClick={handleClick}>
        Delete Account
      </button>
    </div>
  )
}

export default DeleteAccount