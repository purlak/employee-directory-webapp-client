const EmployeeService={

  fetchEmployees: () => {
    return fetch('/employees')
    .then(response => response.json())
  }
}

export default EmployeeService;