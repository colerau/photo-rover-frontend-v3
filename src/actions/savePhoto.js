export const savePhoto = (props) => {
  // returning an anonymous function with dispatch as argument

  // props is a username string

  let formData = {
    username: props.username,
    userId: props.userId
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
      .then(data => console.log(data))
  }  
}