export const getTodayPhotos = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PHOTOS' })
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${getToday()}&api_key=vw4miD1XSE91B0KYSeHkzBQ1GDdSufNUq1Cgy8Er`)
      .then(resp => resp.json())
      .then(data => dispatch({ type: "DEFAULT_PHOTOS", payload: data }))
  }  
}

export const getToday = () => {
  let today = new Date();
  let formatted = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  return formatted;
}