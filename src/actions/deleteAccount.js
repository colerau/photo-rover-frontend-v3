export const deleteAccount = (props) => {
  // returning an anonymous function with dispatch as argument

  // props is userId
  
  let formData = {
    userId: props
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
    fetch(`http://localhost:3000/delete-account`, configObj)
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: "DELETE_ACCOUNT" })
      })
  }  
}