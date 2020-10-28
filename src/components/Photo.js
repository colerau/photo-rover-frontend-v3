import React from 'react';
// import PhotosList from '../containers/PhotosList';
import { connect } from 'react-redux';
import {savePhoto} from '../actions/savePhoto';

class Photo extends React.Component {

  handleClick = (event) => {
    if (this.props.userId) {
      this.props.savePhoto(this.props, this.props.photo.img_src);
      alert("Photo Saved");
    }
  }
  
  render() {

    const { photo } = this.props;

    return (
      <div>
        <li key={photo.id}>
          <img src={`${photo.img_src}`} alt="rover" />
        </li>
  
        <button className="cool-button" onClick={this.handleClick}>Save Photo</button>
  
        <br />
        <br />
        <br />
      </div>
    );
  } 
};

const mapStateToProps = (state) => ({
  username: state.username,
  userId: state.userId,
  photoSaved: state.photoSaved
})

export default connect(mapStateToProps, {savePhoto})(Photo);