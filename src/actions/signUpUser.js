export const signUpUser = (props) => {
  // returning an anonymous function with dispatch as argument

  // props is a username string

  let formData = {
    username: props
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
    fetch(`http://localhost:3000/users`, configObj)
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: "SET_USER", payload: data, hasPhotos: false })
      })
  }  
}