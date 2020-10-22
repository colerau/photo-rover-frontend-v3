import React, { Component } from 'react';
import {connect} from 'react-redux';
import {logInUser} from '../actions/logInUser';

class LogIn extends Component {

  state = {
    username: ''
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
      username: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="cool-big-font">Log In</label>
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