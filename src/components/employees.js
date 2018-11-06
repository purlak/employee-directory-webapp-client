import React from 'react';

const Employees = ({ employees }) => {

  const renderEmployees = employees.map(employee =>
    <span key={employee.id}>{employee.firstname} {employee.lastname}</span>
  )

  return (
    <div>
      {renderEmployees}
    </div>
  )
}

export default Employees;