import React, { Component } from 'react';
import { loginUser } from '../actions/sessionActions';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
// import { bindActionCreators } from 'redux';

// const LoginApiUrl = "http://localhost:3001/api"

class Login extends Component {
  // constructor (props) {
    // super(props);
  state = {
    employees: [],
    username: '',
    password: '',
    // errors: ''
  };  
  
  

  handleInput = event => {
    this.setState({[event.target.name]: event.target.value})
  } //obtain login information

  onLogin = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state)
    // this.setState({
    //   email: "",
    //   password: "",
    //   errors: this.props.errors
    // })

    // return fetch(`${LoginApiUrl}/sessions`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },

    //     body: JSON.stringify(this.state)
    //   })
    //     .then(res => res.json())
    //     .then((response) => {

    //       // if (response.errors) {

    //       //   throw Error(response.errors);

    //       // } else{
    //         sessionStorage.setItem('Token', response.token);
            
    //         //dispatch(loginSuccess(response.this.state))
    //       // }
    //     })

    //this.props.login(this.state)
    

//     const  query  = this.state.username

//     return fetch (`${LoginApiUrl}/sessions`)
//     .then(res => res.json())
//     .then((data) => {

//           if (data.errors) {

//             throw Error(data.errors);

//           } else{
//             sessionStorage.setItem('Token', data.token);
//             history.push("/")
//             //dispatch(loginSuccess(response.user))
//           }
//         })
//         .catch( errors => {

//           sessionStorage.clear()
//           //dispatch(loginFailure(errors))
// })

  }

  render() {
     //console.log(this.state)
    // const errors = this.state.errors
    // if (this.props.employee.id) {
    //   return (
    //     <Redirect push to="/search" />
    //   )
    // } else {

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
  console.log (state.session.employee)
  return {
    employee: state.session.employee
  }
}


export default connect(mapStateToProps, { loginUser })(Login);