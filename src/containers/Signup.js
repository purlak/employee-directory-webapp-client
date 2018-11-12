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
render() {


  return (
    <div>
      <form>

      </form>
    </div>

  )

}
}

export default SignUp;