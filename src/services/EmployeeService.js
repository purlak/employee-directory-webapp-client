const API_URL = process.env.REACT_APP_API_URL;
const EmployeeService = {
  fetchEmployees() {
    
    return fetch('http://localhost:3001/api/employees')
    .then(res => res.json())   
    
  },

  createEmployee(employee) {
    const request = {
      method:'POST',
      data: JSON.stringify(employee),
      contentType: 'application/json',
      accepts: 'application/json'

    };

    return fetch('http://localhost:3001/api/employees', request)
    .then(res => res.json())  
    
  }
}

export default EmployeeService;