import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { findUser } from './actions/sessionActions';


// import Employees from './components/Employees';
// // import EmployeeService from './services/EmployeeService';
// import AddEmployeeForm from './components/AddEmployeeForm'
// //import SearchEmployees from './components/SearchEmployees'
// import UpdateEmployeeForm from './components/UpdateEmployeeForm'
import background from './background-image.svg';


import Search from './containers/Search'
import Login from './containers/Login'

//import store from './store.js'
import './App.css';


class App extends Component {

state = {
  employees: []

}
  // componentDidMount() {
    //this.props.fetchEmployees();

  //   EmployeeService.fetchEmployees().then(employees => this.setState({ employees }))
  //   // EmployeeService.fetchSearchResults().then(searchResults => this.setState({ searchResults }))
  // }

  // addEmployee = employee => {
  //   EmployeeService.createEmployee(employee).then(employee => this.setState({
  //     employees: this.state.employees.concat(employee)
  //   }))
   
  // }

  render() {
    const { employee, query, error } = this.props;

    return (
        
      <div className="App" style={{
        backgroundImage: `url(${background}`, 
         backgroundSize: 'contain',
        backgroundRepeat: 'Repeat',
      }}>

      <Router>
        <div>
        <div className="space"></div>
        
        <div className="space1">
          
          <h3 className="welcome">Welcome!</h3>
          <Route exact path="/" render={Login} />
          <Route path="`/employees/find`" render={Search} />
          <Search />
           
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

