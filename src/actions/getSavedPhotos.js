export const getSavedPhotos = (props) => {
  // returning an anonymous function with dispatch as argument

  // props is userId

  return (dispatch) => {
    fetch(`http://localhost:3000/users/${props}/photos`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
      })
  }  
}