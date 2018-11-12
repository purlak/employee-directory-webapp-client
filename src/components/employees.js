import React from 'react';

const Employees = ({ employees }) => {

  const renderEmployees = employees.map(employee =>
    <div className="displayEmployee">
    <span key={employee.id} className="displayName">{employee.name}  <br/></span>
    </div>
  )

  return (
    <div>
      {renderEmployees}
    </div>
  )
}

export default Employees;