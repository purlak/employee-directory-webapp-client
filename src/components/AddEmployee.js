import React, { Component } from 'react';

class AddEmployee extends Component {

  constructor (props) {
    super(props)

    this.state = {
      first_name: '',
      last_name: '',
      title: '',
      department: '',
      location: ''
    }
  }

  handleOnChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const employee = this.state;
    this.props.AddEmployee(employee)
    this.setState({
      first_name: '',
      last_name: '',
      title: '',
      department: '',
      location: ''
    }) 
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          name="first_name"
          value={this.state.first_name}
          onChange={this.handleOnChange}
          placeholder="First Name"
        />

        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          name="last_name"
          value={this.state.last_name}
          onChange={this.handleOnChange}
          placeholder="Last Name"
        />

        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleOnChange}
          placeholder="Title"
        />

        <button>Add Employee</button>

      </form>

    )
  }
}

export default AddEmployee;