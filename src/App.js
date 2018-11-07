import React, { Component } from 'react';
import Employees from './components/Employees';
import EmployeeService from './services/EmployeeService';
import AddEmployeeForm from './components/AddEmployeeForm'
import UpdateEmployeeForm from './components/UpdateEmployeeForm'
import store from './store.js'
import logo from './logo.svg';
import './App.css';


class App extends Component {

  state = {
    searchTerm: ''
  }
  constructor() {
    super()

    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    EmployeeService.fetchEmployees().then(employees => this.setState({ employees }))
  }

  addEmployee = employee => {
    EmployeeService.createEmployee(employee).then(employee => this.setState({
      employees: this.state.employees.concat(employee)
    }))
   
  }

  render() {

    return (

      <div className="App">
        <h1>Company Name and Logo - Placeholder</h1>

        <div className="navbar">
          <p>Welcome User!</p>
          <p>NavBar</p>
        
        </div>

        <div className="sidebar">
          
          <p> Search </p>
          <p> Add an Employee</p>
          
          <Employees employees={this.state.employees}/>
          <br/>
          
        </div>

        <div className="main-content">
          <p>Main Content</p>
          <div>
            <input type="text" value={this.state.searchTerm}/>
          </div>

          <br/>
          <AddEmployeeForm addEmployee={this.addEmployee}/>
          
        </div>
      </div>
    );
  }
}

export default App;
