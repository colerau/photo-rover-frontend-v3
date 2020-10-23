export const savePhoto = (props, img_src) => {
  // returning an anonymous function with dispatch as argument

  // props is a username string

  // saves photo on backend

  let formData = {
    username: props.username,
    userId: props.userId,
    img_src: img_src
  }

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return (dispatch) => {
    fetch(`http://localhost:3000/users/${props.userId}/photos`, configObj)
      .then(resp => resp.json())
      .then(data => { 
        dispatch({ type: "PHOTO_SAVED" })
      })
  }  
}