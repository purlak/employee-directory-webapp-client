import React, { Component, Fragment } from 'react';

// const SearchEmployees = ({ searchResults }) => {

//   const renderSearchEmployees = searchResults.map(searchResult =>
//     <h3>{searchResult.name} <br/></h3> 
//     )

//   return (
//     <div>
//       {renderSearchEmployees}
//     </div>
//   )
// }

class SearchEmployees extends Component {

  render() {
    
    if (this.props.searchResults.length === 0) {
      return <h3>Name not found</h3>
    } else {
      return (

      <Fragment>
        {this.props.searchResults.map(searchResult =>
          <h3>{searchResult.name} <br/></h3>
        )}

      </Fragment>
    )
    }
  }
}

export default SearchEmployees;