import React, { Component } from 'react';
import {  connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { signupUser } from '../actions/sessionActions';

class SignUp extends Component {

state = {
  name: '',
  username: '',
  password: '',
  title: '',
  department: '',
  location: ''

}

onInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
}

onSignup = event => {
    event.preventDefault();

    this.props.signupUser(this.state)
}

render() {


  return (
    <div>
      <form>
        <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={(event) => this.onInput(event)}
            className="login"
          />
        <br />

        <input
            type="text"
            id="username"
            name="Username"
            placeholder="Username"
            value={this.state.username}
            onChange={(event) => this.onInput(event)}
            className="login"
          />
        <br />

        <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(event) => this.onInput(event)}
            className="login"
          />
        <br />

        <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={(event) => this.onInput(event)}
            className="login"
          />
        <br />

        <input
            type="text"
            id="department"
            name="department"
            placeholder="Department"
            value={this.state.department}
            onChange={(event) => this.onInput(event)}
            className="login"
          />
        <br />

        <input
            type="text"
            id="location"
            name="location"
            placeholder="Location"
            value={this.state.location}
            onChange={(event) => this.onInput(event)}
            className="login"
          />
        <br />

        <button onClick={this.onSignup} className="buttonSize">SignUp</button>

      </form>
    </div>

  )

}
}

export default SignUp;