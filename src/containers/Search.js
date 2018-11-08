import React, { Component } from 'react';


class Search extends Component {
  state = {
    employees: [],
    searchTerm: '',
    searchResults: []
  };

  onInputSearchTerm = event => {
    this.setState({searchTerm: event.target.value})
  } //obtain search input 

  onSearch(event) {
    event.preventDefault();
    const query = this.state.searchTerm

    return fetch (`${employeeApiUrl}/search/person?api_key=d294f330aac8c6ae0963b497558e9f36&query=${query}`)
    .then(res => res.json())

    .then(data => this.setState({searchResults: data.results})) 
  }

  // searchDb = event => {
  //   fetch (`http://localhost:3001/api/employees`)
  //   .then(res => res.json())
  //   .then(data => this.setState({employees: this.state.employees.concat(data.results)})) 

  // }

  render () {
    <div>
      <input type="text" onChange={this.onSearchInput} value={this.state.searchTerm} placeholder="Search" className="searchBar"/>
      <button onClick={this.onSearch} className="buttonSize">Search</button>
      
      <div>
        <Employees employees={this.state.employees}/>
        <SearchEmployees searchResults={this.state.searchResults} />
      </div>


  }

  
}

export default Search;

