import React, { Component } from 'react';
import Employees from './components/Employees';
import EmployeeService from './services/EmployeeService';

import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor() {
    super()

    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    EmployeeService.fetchEmployees().then(employees => this.setState({ employees }))
  }

  render() {
    
    return (

      <div className="App">
        <h1>Company Name and Logo - Placeholder</h1>

        <div className="navbar">
          <p>NavBar</p>
        
        </div>

        <div className="sidebar">
          <p>SideBar</p>
          <p> Search </p>
          <p> Add an Employee</p>
          <Employees employees={this.state.employees}/>

        </div>

        <div className="main-content">
          <p>Main Content</p>
          
        </div>
      </div>
    );
  }
}

export default App;
