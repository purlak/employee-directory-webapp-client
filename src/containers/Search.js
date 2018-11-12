import React, { Component } from 'react';

import Employees from '../components/Employees'
import SearchEmployees from '../components/SearchEmployees'
import '../SearchEmployees.css';


const employeeApiUrl = "https://api.themoviedb.org/3"

class Search extends Component {
  constructor () {
    super();
  
    this.state = {
      employees: [],
      searchTerm: '',
      searchResults: [],
      currentPage: 1,
      resultsPerPage: 3
    };
  }

  onInputSearchTerm = event => {
    this.setState({
      employees: [],
      // searchTerm: '',
      searchResults: []
    });
    this.setState({searchTerm: event.target.value})
  } //obtain search input 

  onSearch = (event) => {
    event.preventDefault();
    const  query  = this.state.searchTerm

    return fetch (`${employeeApiUrl}/search/person?api_key=d294f330aac8c6ae0963b497558e9f36&query=${query}`)
    .then(res => res.json())
    .then(data => this.setState({searchResults: data.results})) 
    
  }

  searchDb = async event => {
    await this.onSearch(event)
    const query = this.state.searchTerm
    
    fetch (`http://localhost:3001/api/search/${query}`)
    .then(res => res.json())
    

    .then(data => this.setState({employees: this.state.employees.concat(data)})) 
  
  }

  render () {    
    console.log(this.state.searchResults)
    if (!this.state.searchTerm) {  
      return (
        <div>

      <input 
        type="text" 
        onChange={this.onInputSearchTerm} 
        value={this.state.searchTerm} 
        placeholder="Search" 
        className="searchBar"
      />
      <br/>
      <button onClick={this.searchDb} className="buttonSize">Search</button>
      </div>

      )

    }
    
    else if (this.state.searchResults.length === 0) { 
      return (
        <div>

      <input 
        type="text" 
        onChange={this.onInputSearchTerm} 
        value={this.state.searchTerm} 
        placeholder="Search" 
        className="searchBar"
      />
      <br/>
      <button onClick={this.searchDb} className="buttonSize">Search</button>
      </div>


      )

    }

    else {
    return (

    <div>

      <input 
        type="text" 
        onChange={this.onInputSearchTerm} 
        value={this.state.searchTerm} 
        placeholder="Search" 
        className="searchBar"
      />
      <br/>
      <button onClick={this.searchDb} className="buttonSize">Search</button>
      
      <div>
        <Employees employees={this.state.employees}/>

        <SearchEmployees 
        searchResults={this.state.searchResults} 
        currentPage = {this.state.currentPage} 
        resultsPerPage = {this.state.resultsPerPage} />
      </div>
    </div>
  )
  }
}

  
}

export default Search;

