import React, { Component } from 'react';
import {connect} from 'react-redux';
import {newEarthDate} from '../actions/newEarthDate'

class NewEarthDate extends Component {

  state = {
    date: ''
  }

  handleChange = (event) => {
    this.setState({
      date: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.newEarthDate(this.state.date)
    
    this.setState({
      date: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="cool-big-font">View More Photos</label>
          <br />
          <label className="cool-font">Earth Date (must be YYYY-MM-DD):</label> 
          <input type="text" value={this.state.date} onChange={this.handleChange} className="cool-box"/>
          <input type="submit" className="cool-button"/>
        </form>  
      </div>
    )
  }
};

export default connect(null, {newEarthDate})(NewEarthDate);