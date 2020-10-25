import React from 'react';
import logo from './logo.svg';
import './App.css';
import PhotosList from './containers/PhotosList'
import { getYesterdayPhotos } from './actions/getYesterdayPhotos'
import { connect } from 'react-redux'
import uniq from 'lodash/uniq'
import UserPhotosList from './containers/UserPhotosList'
import NavBar from './containers/NavBar'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchYesterdayPhotos()
  }

  // filterPhotos = (photos) => {
  //   if (photos) {
  //     return photos.filter((photo) => (photo.id % 2 === 0))
  //   }
  // }

  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
        </div>
        <div>
          {this.props.loading === true ? <p>loading...</p> : <PhotosList photos={this.props.photos} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos,
  loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
  fetchYesterdayPhotos: () => dispatch(getYesterdayPhotos())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);