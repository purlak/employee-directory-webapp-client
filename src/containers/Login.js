import React, { Component } from 'react';
import { loginUser } from '../actions/sessionActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Login extends Component {

  state = {
    employees: [],
    username: '',
    password: '',
  
  };  
  
  

  handleInput = event => {
    this.setState({[event.target.name]: event.target.value})
  } //obtain login information

  onLogin = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state)
    this.props.history.push(`/employees/find`);
  }

  render() {
    return (
      <div>
      <form>
        <input 
        type="text" 
        id="username" 
        name="username"
        onChange={(event) => {this.handleInput(event)}} 
        value={this.state.username} 
        placeholder="Username" 
        />

        <br/>

        <input 
        type="password" 
        id="password"
        name="password"
        onChange={(event) => {this.handleInput(event)}} 
        value={this.state.password} 
        placeholder="Password" 
        />
        <br/>

      <button onClick={this.onLogin} className="buttonSize">Login</button>
      </form>

      <div><span className="login-section__span">Not registered? </span><a className="login-section__links" href="/signup">Signup</a></div>
      </div>
        
      
    )

  }

// }
}

const mapStateToProps = (state) => {
  //console.log (state.session.employee)
  return {
    employee: state.session.employee
  }
}


export default withRouter(connect(mapStateToProps, { loginUser })(Login));