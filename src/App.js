import React from 'react';
import logo from './logo.svg';
import './App.css';
import PhotosList from './containers/PhotosList'
import { getYesterdayPhotos } from './actions/getYesterdayPhotos'
import { connect } from 'react-redux'
import uniq from 'lodash/uniq'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchYesterdayPhotos()
  }

  filterPhotos = (photos) => {
    if (photos) {
      return photos.filter((photo) => (photo.id % 2 === 0))
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Photo Rover</h1>
          <h4>view and save pictures of Mars from NASA's Curiosity Rover</h4>
          <br />
          <br />
          <img src='https://solarsystem.nasa.gov/internal_resources/3841' className="App-logo" alt="logo" />
          <br />
          <br />
          <img src="https://www.pinclipart.com/picdir/big/53-534990_white-arrow-down-white-arrow-down-png-clipart.png" height="100px" />
          <br />
        </header>
        <PhotosList photos={this.filterPhotos(this.props.photos)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos
})

const mapDispatchToProps = (dispatch) => ({
  fetchYesterdayPhotos: () => dispatch(getYesterdayPhotos())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);