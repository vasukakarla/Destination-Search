// Write your code here
import './index.css'

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="destinationSearch-bg-container">
        <h1 className="destinationSearch-heading">Destination Search</h1>
        <div className="searchInputElement-container">
          <input
            type="search"
            placeholder="Search"
            className="searchInputElement"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon-img"
          />
        </div>
        <ul className="places-container">
          {searchResults.map(eachDestination => (
            <DestinationItem
              key={eachDestination.id}
              imgUrl={eachDestination.imgUrl}
              name={eachDestination.name}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
