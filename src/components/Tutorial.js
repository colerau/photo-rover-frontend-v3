import React from 'react'

const Tutorial = (props) => {
  return(
    <div>
      <h1>
        Tutorial
      </h1>

      <h3>
        Viewing More Photos
      </h3>
      <p>
        To see more photos of Mars, navigate to the home screen (click the picture of Mars in the top-left corner). Click "New Earth Date" in the header. Type in a new Earth date in the form. The date has to be written as YYYY-MM-DD (e.g., 2019-09-08, which stands for September 8th, 2019). After submitting the form, photos of Mars from the new Earth date should appear. 
      </p>

      <br /> <br /> <br />

      <h3>
        Viewing a Saved Photo
      </h3>

      <p>
        <em>You must be logged in to view your photos.</em>
      </p>
      <p>
        To view a saved photo, navigate to the home screen (click the picture of Mars in the top-left corner). Click "Saved Photos" in the header. Click the "Refresh Saved Photos" button. If you have photos saved, they should appear on the page. 
      </p>
    </div>
  )
}

export default Tutorial