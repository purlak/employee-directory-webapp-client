import React, { Component } from 'react';
import Employees from '../components/Employees';
import EmployeeService from '../services/EmployeeService';

class AddEmployeeForm extends Component {

  constructor (props) {
    super(props)

    this.state = {
      name: '',
      title: '',
      department: '',
      location: '',
      employees:[]
      
    }
  }

  // componentDidMount() {
  //   this.props.fetchEmployees(this.state);
  //   EmployeeService.fetchEmployees().then(employees => this.setState({ employees }));
  //   EmployeeService.fetchSearchResults().then(searchResults => this.setState({ searchResults }))
  // }


  handleOnChange = event => {
    // const {name, value} = event.target;
    // this.setState({
    //   [name]: value
    // })
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const employee = this.state
    
    EmployeeService.createEmployee(employee).then(employee => this.setState({
      employees: this.state.employees.concat(employee)}))
    // this.setState({
    //   name: '',
    //   title: '',
    //   department: '',
    //   location: ''
    // }) 
  }

  render() {
    console.log(this.state)
    return (
  
      <fragment>
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="Name">Name </label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleOnChange}
          placeholder="Enter Name"
        />
        <br/>

        <label htmlFor="title">Title </label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleOnChange}
          placeholder="Enter Title"
        />
        <br/>

        <label htmlFor="department">Department </label>
        <input
          type="text"
          name="department"
          value={this.state.department}
          onChange={this.handleOnChange}
          placeholder="Enter Department"
        /> 
        <br/>

        <label htmlFor="location">Location </label>
        <input
          type="text"
          name="location"
          value={this.state.location}
          onChange={this.handleOnChange}
          placeholder="Enter Location"
        />
        <br/>

        <button>Add Employee</button>

      </form>
      </fragment>

    )
  }
}

export default AddEmployeeForm;