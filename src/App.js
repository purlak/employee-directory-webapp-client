import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Company Name and Logo - Placeholder</h1>

        <div className="navbar">
          <p>NavBar</p>
          <Navbar />
        </div>

        <div className="sidebar">
          <p>SideBar</p>
          <Employees />
        </div>

        <div className="main-content">
          <p>Main Content</p>
          <Employee />
        </div>
      </div>
    );
  }
}

export default App;
