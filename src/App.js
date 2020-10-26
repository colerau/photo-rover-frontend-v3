import React from 'react';
import logo from './logo.svg';
import './App.css';
import PhotosList from './containers/PhotosList'
import { getYesterdayPhotos } from './actions/getYesterdayPhotos'
import { connect } from 'react-redux'
import uniq from 'lodash/uniq'
import UserPhotosList from './containers/UserPhotosList'
import NavBar from './components/NavBar'
import {Route, Switch} from 'react-router-dom'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'

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
          <header className="App-header">
            <NavBar />
          </header>

          <Switch>
            <Route path="/users/:id/photos" render={(routerProps) => <UserPhotosList {...routerProps} photos={this.props.photos} />}/>
            <Route path="/login" render={(routerProps) => <LogIn {...routerProps} />}/>
            <Route path="/signup" render={(routerProps) => <SignUp {...routerProps} />}/>
            <Route path="/" render={(routerProps) => <PhotosList {...routerProps} photos={this.props.photos} />}/>
          </Switch>
        </div>
        
        {/* <div>
          {this.props.loading === true ? <p>loading...</p> : <PhotosList photos={this.props.photos} />}
        </div> */}
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