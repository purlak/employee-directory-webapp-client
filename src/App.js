import React, { Component } from 'react';
import Employees from './components/Employees'

import logo from './logo.svg';
import './App.css';

let employees = [
  { firstname: 'Minerva', lastname: 'McGonagall', title: 'House Captain', id:1}
]

class App extends Component {
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

          <Employees employees={employees}/>
        </div>

        <div className="main-content">
          <p>Main Content</p>
          
        </div>
      </div>
    );
  }
}

export default App;
