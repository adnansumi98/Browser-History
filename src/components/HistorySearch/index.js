import HistoryItem from '../HistoryItem'
import './index.css'
import { Component } from 'react'

class HistorySearch extends Component {
  state = {
    searchInput: '',
    HistoryItemList: this.props.HistoryList,
  }

  updateSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteItem = id => {
    this.setState(prevState => ({
      HistoryItemList: this.state.HistoryItemList.filter(
        item => item.id !== id,
      ),
    }))
  }

  renderNavbar = () => {
    return (
      <div className="NavBar-container">
        <nav className="nav-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-logo"
            />
            <input
              className="search-input"
              type="search"
              placeholder="Search History"
              onChange={this.updateSearch}
            />
          </div>
        </nav>
      </div>
    )
  }

  render() {
    const renderHistoryItem = () => {
      const { searchInput, HistoryItemList } = this.state
      const searchResults = HistoryItemList.filter(eachItem =>
        eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
      )

      if (searchResults.length !== 0) {
        return (
          <HistoryItem HistoryList={searchResults} onDelete={this.deleteItem} />
        )
      } else {
        return <p className="no-result">There is no history to show</p>
      }
    }
    return (
      <div>
        {this.renderNavbar()}
        {renderHistoryItem()}
      </div>
    )
  }
}

export default HistorySearch
