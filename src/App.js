import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Employees from './components/Employees';
import EmployeeService from './services/EmployeeService';
import AddEmployeeForm from './components/AddEmployeeForm'
//import SearchEmployees from './components/SearchEmployees'
import UpdateEmployeeForm from './components/UpdateEmployeeForm'
import background from './background-image.svg';


import Search from './containers/Search'
//import store from './store.js'
import './App.css';


class App extends Component {

state = {
  employees: []

}
  componentDidMount() {
    //this.props.fetchEmployees();

    //EmployeeService.fetchEmployees().then(employees => this.setState({ employees }))
    // EmployeeService.fetchSearchResults().then(searchResults => this.setState({ searchResults }))
  }

  // constructor() {
  //   super()

  //   this.state = {
  //     employees: [],
  //     searchTerm: '',
  //     searchResults: []

  //   }
  // }

  addEmployee = employee => {
    EmployeeService.createEmployee(employee).then(employee => this.setState({
      employees: this.state.employees.concat(employee)
    }))
   
  }


  render() {
    return (
        
      <div className="App" style={{backgroundImage: `url(${background}`, 
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat',}}>
        
        <h1>Hello World</h1>
        
      </div>
    
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

export default connect(mapStateToProps)(App);

