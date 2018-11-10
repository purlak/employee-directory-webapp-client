import React from 'react';

const Employees = ({ employees }) => {

  const renderEmployees = employees.map(employee =>
    <span key={employee.id}>{employee.first_name}  <br/></span>
  )

  return (
    <div>
      {renderEmployees}
    </div>
  )
}

export default Employees;