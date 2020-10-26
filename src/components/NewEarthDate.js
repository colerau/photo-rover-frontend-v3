import React, { Component } from 'react';
import {connect} from 'react-redux';
import {newEarthDate} from '../actions/newEarthDate'
import {Redirect} from 'react-router-dom'

class NewEarthDate extends Component {

  state = {
    date: '',
    redirect: false
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
      date: '',
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
          <label className="cool-big-font">View More Photos</label>
          <br />
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