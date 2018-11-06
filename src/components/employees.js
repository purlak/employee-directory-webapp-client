import React from 'react';

const Employees = ({ employees }) => {

  const renderEmployees = employees.map(employee =>
    <span key={employee.id}>{employee.first_name} {employee.last_name} </span>
  )

  return (
    <div>
      {renderEmployees}
    </div>
  )
}

export default Employees;