import React from 'react';
import logo from './logo.svg';
import './App.css';
import PhotosList from './containers/PhotosList'
import { getYesterdayPhotos } from './actions/getYesterdayPhotos'
import { connect } from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchYesterdayPhotos()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://solarsystem.nasa.gov/internal_resources/3841' className="App-logo" alt="logo" />
        </header>
        <PhotosList photos={this.props.photos} />
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