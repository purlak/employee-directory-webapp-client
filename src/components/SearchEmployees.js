import React, { Component, Fragment } from 'react';
import '../SearchEmployees.css';

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

const imageBaseUrl = "https://image.tmdb.org/t/p/w500/"

class SearchEmployees extends Component {

  render() {

    if (this.props.searchResults.length === 0) {
      return <h3>Name not found</h3>
    } else {
  
      return (

      <Fragment>
        {this.props.searchResults.map(searchResult =>

          <div className="displayEmployee">
          <p className="displayName">{searchResult.name} <br/></p>
          <div>
          <img src={`${imageBaseUrl}/${searchResult.profile_path}`} className="imageSize" />
          <br/>
          </div>
          </div>
        )}

      </Fragment>
    )
    }
  }
}

export default SearchEmployees;