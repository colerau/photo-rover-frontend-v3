import React, { Component } from 'react';
import App from '../App';
import Photo from '../components/Photo';
import { getYesterday } from '../actions/getYesterdayPhotos'
import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'
import NewEarthDate from '../components/NewEarthDate'
import {connect} from 'react-redux'
import {getSavedPhotos} from '../actions/getSavedPhotos'
import {Route} from 'react-router-dom'

class UserPhotosList extends Component {

  render() {
    return(
      <div>
        {this.props.hasPhotos ? this.props.getSavedPhotos(this.props.userId) : <p>You don't have any photos saved</p>}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  earthDate: state.earthDate,
  userId: state.userId,
  hasPhotos: state.hasPhotos
})

export default connect(mapStateToProps, {getSavedPhotos})(UserPhotosList);