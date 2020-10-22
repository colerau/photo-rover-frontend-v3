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

        <a href="/" className={"button1"}>Save Photo</a>

        <br />
        <br />
        <br />
      </div>
    );
  }

};

export default Photo;