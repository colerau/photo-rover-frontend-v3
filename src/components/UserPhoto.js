import React from 'react'

const UserPhoto = props => {

  return(
    <div>
      <li key={props.photo.id}>
        <img src={`${props.photo.img_src}`} alt="rover" />
      </li>
    </div>
  )
}

export default UserPhoto