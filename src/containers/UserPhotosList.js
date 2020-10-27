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
import UserPhoto from '../components/UserPhoto'

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

  handleClick = () => {
    this.props.getSavedPhotos(this.props.userId)
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
          {this.props.userId ? <button onClick={this.handleClick} className="cool-button">Refresh Saved Photos</button> : null}
          <div>
          </div>
          {this.props.userPhotos.length > 0 ? this.props.userPhotos.map((photo) => (
            <UserPhoto key={photo.id} photo={photo} />
          )) : null}
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
  userPhotos: state.userPhotos
})

export default connect(mapStateToProps, {getSavedPhotos})(UserPhotosList);