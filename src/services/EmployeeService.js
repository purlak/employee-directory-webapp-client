const API_URL = process.env.REACT_APP_API_URL;
const employeeApiUrl = "https://api.themoviedb.org/3"
const EmployeeService = {
  
  fetchEmployees() {
    
    return fetch(`$(API_URL)/employees`)
    .then(res => res.json())   
    
  },

  createEmployee(employee) {
    const request = {
      method:'POST',
      body: JSON.stringify({
        employee: employee
      }),
      headers: {
        'Content-Type': 'application/json',
      }
 

    };

    return fetch('http://localhost:3001/api/employees', request)
    .then(res => res.json())  
    
  },

  // fetchSearchResults() {
  //   const query = this.state.searchTerm
    
  //   return fetch(`${employeeApiUrl}/search/person?api_key=d294f330aac8c6ae0963b497558e9f36&query=${query}`)
  //   .then(res => res.json())   
    
  // },



}

export default EmployeeService;