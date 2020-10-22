import React, { Component } from 'react';
import App from '../App';
import Photo from '../components/Photo';
import { getYesterday } from '../actions/getYesterdayPhotos'
import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'
import NewEarthDate from '../components/NewEarthDate'
import {connect} from 'react-redux'

class PhotosList extends Component {

  render() {
    return(
      <div>
        <SignUp />
        <br />
        <LogIn />
        <br />
        <NewEarthDate />
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
  earthDate: state.earthDate
})

export default connect(mapStateToProps)(PhotosList);