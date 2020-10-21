import React, { Component } from 'react';
import PhotosList from '../containers/PhotosList';

class Photo extends Component {

  render() {
    const { photo } = this.props;

    return (
      <div>
        <li key={photo.id}>
          <img src={`${photo.img_src}`} alt="rover" />
        </li>
      </div>
    );
  }

};

export default Photo;