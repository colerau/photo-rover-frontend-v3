import React from 'react';
import logo from './logo.svg';
import './App.css';
import PhotosList from './containers/PhotosList'
import { getTodayPhotos } from './actions/getTodayPhotos'
import { connect } from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchTodayPhotos()
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
  fetchTodayPhotos: () => dispatch(getTodayPhotos())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);