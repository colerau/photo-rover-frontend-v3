import React, { Component } from 'react';
import App from '../App';
import Photo from '../components/Photo';
import { getYesterday } from '../actions/getYesterdayPhotos'
import SignUp from '../components/SignUp'

class PhotosList extends Component {

  render() {
    return(
      <div>
        <SignUp />
        <h1>
          {`Curiosity Rover Photos from Yesterday, ${getYesterday()}`}
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

export default PhotosList;