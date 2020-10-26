import React, { Component } from 'react';
import {connect} from 'react-redux';
import {logInUser} from '../actions/logInUser';
import {Redirect} from 'react-router-dom'

class LogIn extends Component {

  state = {
    username: '',
    redirect: false
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.logInUser(this.state.username);
    this.setState({
      username: '',
      redirect: true
    })
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <br />
          <label className="cool-big-font">Log In</label>
          <br />
          <br />
          <label className="cool-font">Username:</label> 
          <input type="text" value={this.state.username} onChange={this.handleChange} className="cool-box"/>
          <input type="submit" className="cool-button"/>
        </form>  
      </div>
    )
  }
};

export default connect(null, {logInUser})(LogIn);