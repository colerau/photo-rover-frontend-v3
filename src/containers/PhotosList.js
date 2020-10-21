import React, { Component } from 'react';
import App from '../App';
import Photo from '../components/Photo';
import { getToday } from '../actions/getTodayPhotos'

class PhotosList extends Component {

  solve() {
    console.log(0)
  }

  render() {
    return(
      <div>
        <h1>
          {`Curiosity Rover Photos for ${getToday()}`}
        </h1>

        <ul>
          {this.solve()}
          {this.props.photos && this.props.photos.map((photo) => (
            <Photo photo={photo} />
          ))}

        </ul>
      </div>
    );
  }
};

export default PhotosList;