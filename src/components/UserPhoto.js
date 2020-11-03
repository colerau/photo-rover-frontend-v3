import React from 'react'

const UserPhoto = props => {

  const handleClick = () => {
    // console.log("click")
    props.favorited(props.photo.id)

  }

  return(
    <div>
      <li key={props.photo.id}>
        <img src={`${props.photo.img_src}`} alt="rover" />
        {props.favoritedPhotoId === props.photo.id ? <p>Favorited</p> : <React.Fragment></React.Fragment>}
        <button className="cool-button" onClick={handleClick}>Favorite</button>
      </li>
      <br />
      <br />
    </div>
  )
}

export default UserPhoto