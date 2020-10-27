import React, { Component } from 'react';
import App from '../App';
import Photo from '../components/Photo';
import { getYesterday } from '../actions/getYesterdayPhotos'
import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'
import NewEarthDate from '../components/NewEarthDate'
import {connect} from 'react-redux'
import {getSavedPhotos} from '../actions/getSavedPhotos'
import {Route, Redirect} from 'react-router-dom'

class UserPhotosList extends Component {

  // getUserFromRoute = () => {
  //   console.log(this.props);
  //   debugger;


  // }

  userLoggedIn = () => {
    if (!this.props.userId) {
      return <Redirect to="/login" />
    }
  }

  displayPhotos = () => {
    this.props.photos.map((photo) => (
      <Photo photo={photo} />
    ))
  }

  render() {
    return(
      <div>

        {/* <div>
          {this.getUserFromRoute()}
        </div> */}

        <div>
          {this.userLoggedIn()}
          <br />
          <button className="cool-button">To Saved Photos</button>
        </div>

        <ul>
        </ul>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  earthDate: state.earthDate,
  userId: state.userId,
  hasPhotos: state.hasPhotos,
  photos: state.photos
})

export default connect(mapStateToProps, {getSavedPhotos})(UserPhotosList);