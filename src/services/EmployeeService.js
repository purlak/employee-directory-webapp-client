const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);

const EmployeeService={

  fetchEmployees: () => {
    return fetch('/employees')
    .then(response => response.json())
  }
}

export default EmployeeService;