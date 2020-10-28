import React, { Component } from 'react';
// import App from '../App';
import Photo from '../components/Photo';
// import { getYesterday } from '../actions/getYesterdayPhotos'
// import SignUp from '../components/SignUp'
// import LogIn from '../components/LogIn'
// import NewEarthDate from '../components/NewEarthDate'
import {connect} from 'react-redux'
import {getSavedPhotos} from '../actions/getSavedPhotos'
// import {Route} from 'react-router-dom'

class PhotosList extends Component {

  handleClick = (event) => {
    if (this.props.userId) {
      this.props.getSavedPhotos(this.props.userId)
    }
  }

  render() {
    return(
      <div>
        <div>
          {this.props.userId ? <h2>Logged in as {`${this.props.username}`}</h2> : <h2>You are not logged in</h2>}
        </div>

        <h1>
          {`Curiosity Rover Photos from ${this.props.earthDate}`}
        </h1>

        <ul>
          {this.props.photos && this.props.photos.map((photo) => (
            <Photo key={photo.id} photo={photo} />
          ))}

        </ul>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  earthDate: state.earthDate,
  userId: state.userId,
  username: state.username

})

export default connect(mapStateToProps, {getSavedPhotos})(PhotosList);