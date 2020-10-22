import React, { Component } from 'react';

class SignUp extends Component {

  state = {
    username: ''
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit = (event) => {

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="cool-big-font">Sign Up</label>
          <br />
          <label className="cool-font">Username:</label> 
          <input type="text" value={this.state.username} onChange={this.handleChange} className="cool-box"/>
          <input type="submit" className="cool-button"/>
        </form>  
      </div>
    );
  }
};

export default SignUp;