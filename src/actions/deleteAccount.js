export const deleteAccount = (props) => {
  // returning an anonymous function with dispatch as argument

  // props is userId

  let formData = {
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
    fetch(`http://localhost:3000/logout`, configObj)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
      })
  }  
}