import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../actions/signUpUser';
import {Redirect} from 'react-router-dom'

class SignUp extends Component {

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
    this.props.signUpUser(this.state.username);
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
        <br />
        <form onSubmit={this.handleSubmit}>
          <label className="cool-big-font">Sign Up</label>
          <br />
          <br />
          <label className="cool-font">Username:</label> 
          <input type="text" value={this.state.username} onChange={this.handleChange} className="cool-box"/>
          <input type="submit" className="cool-button"/>
        </form>  
      </div>
    );
  }
};

export default connect(null, { signUpUser })(SignUp);