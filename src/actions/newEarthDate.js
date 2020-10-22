export const newEarthDate = (props) => {
  // returning an anonymous function with dispatch as argument

  // props is a date string

  return (dispatch) => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${props}&api_key=vw4miD1XSE91B0KYSeHkzBQ1GDdSufNUq1Cgy8Er`)
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: "NEW_EARTH_DATE", payload: data })
      })
  }  
}