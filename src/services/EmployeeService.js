const API_URL = process.env.REACT_APP_API_URL;
const EmployeeService = {
  fetchEmployees() {
    
    return fetch('http://localhost:3001/api/employees')
    .then(res => res.json())   
    
  }
}

export default EmployeeService;