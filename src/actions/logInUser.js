export const logInUser = (props) => {
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
    fetch(`http://localhost:3000/login`, configObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.message === "User not found") {
          alert("Could not find user")
        } else {
          dispatch({ type: "SET_USER", payload: data })
        } 
      })
  }  
}