import React, { Component, Fragment } from 'react';

class SearchEmployees extends Component {

  render() {
    if (this.props.searchResults.length === 0) {
      return <h3>Name not found! </h3>
    } else {
      return (

      <Fragment>
        {this.props.searchresults.map(employee =>
          <h3>{employee.name} <br/></h3>
        )}

      </Fragment>
    )
    }



  }
}

export default SearchEmployees;