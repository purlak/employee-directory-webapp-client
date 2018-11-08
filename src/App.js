import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Employees from './components/Employees';
import EmployeeService from './services/EmployeeService';
import AddEmployeeForm from './components/AddEmployeeForm'
import SearchEmployees from './components/SearchEmployees'
import UpdateEmployeeForm from './components/UpdateEmployeeForm'
import store from './store.js'
import logo from './logo.svg';
import './App.css';

const employeeApiUrl = "https://api.themoviedb.org/3"

class App extends Component {

  componentDidMount() {
    EmployeeService.fetchEmployees().then(employees => this.setState({ employees }))
    // EmployeeService.fetchSearchResults().then(searchResults => this.setState({ searchResults }))
  }

  constructor() {
    super()

    this.state = {
      employees: [],
      searchTerm: '',
      searchResults: []

    }
  }

  addEmployee = employee => {
    EmployeeService.createEmployee(employee).then(employee => this.setState({
      employees: this.state.employees.concat(employee)
    }))
   
  }


  render() {
    
    return (

      <div className="App">
        <div>
        

        <div className="navbar">
          <p>Welcome User!</p>
          <p>NavBar</p>
        
        </div>

        <div className="sidebar">
          
          <p> Search </p>
          <p> Add an Employee</p>
          <AddEmployeeForm addEmployee={this.addEmployee}/>
          <Employees employees={this.state.employees}/>
          <br/>
          
        </div>

        <div className="main-content">
          
          
          </div>

          <br/>
          
          
        </div>
      </div>
     </div> 
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

