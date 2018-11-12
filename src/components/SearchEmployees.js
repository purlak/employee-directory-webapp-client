import React, { Component, Fragment } from 'react';
import '../SearchEmployees.css';
import No_image_available from '../No_image_available.svg';


const imageBaseUrl = "https://image.tmdb.org/t/p/w500/"

class SearchEmployees extends Component {

// constructor () {
//   super();

//   // this.state = {
    
//   // }

//   this.handleClick = this.handleClick.bind(this);
// }

// handleClick(event) {
//     this.setState({
//       currentPage: Number(event.target.id)
//     });
//   }

render() {
  console.log(this.props.searchResults)
  console.log(this.props.employees)

 
  // const indexOfLastResult = this.props.currentPage * this.props.resultsPerPage
  // const indexOfFirstResult = indexOfLastResult - this.props.resultsPerPage
  // const currentResults = this.props.searchResults.slice(indexOfFirstResult, indexOfLastResult)

  // const pages = [];
  //   for (let i = 1; i <= Math.ceil(this.props.searchResults.length / this.props.resultsPerPage); i++) {
  //     pages.push(i);
  //   }

  // const renderPageNumbers = pages.map(number => {
  //     return (
  //       <li
  //         key={number}
  //         id={number}
  //         onClick={this.handleClick}
  //       >
  //         {number}
  //       </li>
  //     );
  //   });



  if (this.props.searchResults.length === 0) {
    return <h3>Name not found</h3>

  } 

  else {    
    
    return (
  

    <Fragment>
      {this.props.searchResults.map((searchResult) => {
        if (searchResult.profile_path !== null) {
          return (
            <div className="displayEmployee">
            <p className="displayName">{searchResult.name} <br/></p>
            <img src={`${imageBaseUrl}/${searchResult.profile_path}`} className="imageSize" />
            <br/>
            </div>
          )
        }
        else {
          return (
            <div className="displayEmployee">
            <p className="displayName">{searchResult.name} <br/></p>
            <img src={`${No_image_available}`} className="imageSize" />
            <br/>
            </div>
          )


        }

      }

         
      )}

    </Fragment>
    
    )
  }  
  }
}

export default SearchEmployees;