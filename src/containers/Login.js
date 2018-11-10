import React, { Component } from 'react';

const LoginApiUrl = "http://localhost:3001/api"

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  handleInput = event => {
    this.setState({[event.target.name]: event.target.value})
  } //obtain login information

  onLogin = (event) => {
    event.preventDefault();
    const  query  = this.state.username

    return fetch (`${LoginApiUrl}/sessions`)
    .then(res => res.json())

    .then(data => this.setState({searchResults: data.results})) 

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
      <div>
        
      </div>
    </div>

    )

  }

}

export default Login;