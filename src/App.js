import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Company Directory</h1>

        <div>
          <p>NavBar</p>
        </div>

        <div className="sidebar">
          <p>SideBar</p>
        </div>

        <div className="main-content">
          <p>Main Content</p>
        </div>
      </div>
    );
  }
}

export default App;
