import React, { Component } from 'react';
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

  constructor() {
    super()

    this.state = {
      employees: [],
      searchTerm: '',
      searchResults: []

    }
  }

  handleSearchInput = event => {
    this.setState({searchTerm: event.target.value})
  }

  searchEmployee = () => {
    const query = this.state.searchTerm
    fetch (`${employeeApiUrl}/search/person?api_key=d294f330aac8c6ae0963b497558e9f36&query=${query}`)
    .then(res => res.json())
    .then(data => this.setState({searchResults: data.results})) 
  }

  componentDidMount() {
    EmployeeService.fetchEmployees().then(employees => this.setState({ employees }))
    // EmployeeService.fetchSearchResults().then(searchResults => this.setState({ searchResults }))
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
          <p>Search Bar</p>
          <div>
            <input type="text" onChange={this.handleSearchInput} value={this.state.searchTerm}/>
            <button onClick={this.searchEmployee}>Search</button>
            <SearchEmployees searchResults={this.state.searchResults} />
          </div>

          <br/>
          <AddEmployeeForm addEmployee={this.addEmployee}/>
          
        </div>
      </div>
    );
  }
}

export default App;
