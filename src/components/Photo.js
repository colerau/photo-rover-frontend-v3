import React from 'react';
import PhotosList from '../containers/PhotosList';
import { connect } from 'react-redux';
import {savePhoto} from '../actions/savePhoto';

class Photo extends React.Component {

  handleClick = (event) => {
    // TODO work on this
    console.log(this.props.username, "saves this photo")
    if (this.props.userId) {
      this.props.savePhoto(this.props)
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
  userId: state.userId
})

export default connect(mapStateToProps, {savePhoto})(Photo);