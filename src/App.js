import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { findUser } from './actions/sessionActions';


import Employees from './components/Employees';
import EmployeeService from './services/EmployeeService';
import AddEmployeeForm from './components/AddEmployeeForm'
// //import SearchEmployees from './components/SearchEmployees'
// import UpdateEmployeeForm from './components/UpdateEmployeeForm'
import background from './background-image.svg';


import Search from './containers/Search'
import Login from './containers/Login'
import Signup from './containers/Signup';

//import store from './store.js'
import './App.css';


class App extends Component {

state = {
  employees: [],
  addEmployee: []
}

componentDidMount() {
  // const token = localStorage.getItem('Token');
  //   if (token) {
  //     this.props.findUser(token);
  // }

    
  }   
   


  render() {
    const { employee, query, error } = this.props;

    return (
       
      <div className="App" style={{
        backgroundImage: `url(${background}`, 

         backgroundSize: 'contain',
        backgroundRepeat: 'Norepeat',
      }}>

      <Router>
        <div>
        <div className="space"></div>
        <div className="space1">
          
          <Switch>

          { employee.id ?
          <Route exact path="/findemployee" render={(props) => <Search employee={employee} />} />
          :
          <Route exact path="/" component={Login} /> 
          }

          <Route exact path="/add" component={AddEmployeeForm} />
          <Route exact path='/signup' component={Signup} />
          
          </Switch>
        </div>  
        </div>
      </Router>
      </div>
    
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employee: state.session.employee,
    error: state.session.error
  }
}

export default connect(mapStateToProps, { findUser } )(App);

