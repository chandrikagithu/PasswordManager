import {Component} from 'react'

import UserContainer from '../UserContainer'

import './index.css'

const profileColors = [
  '#f59e0b',
  '#10b981',
  '#f97316',
  '#14b8a6',
  '#b91c1c',
  '#7683cb',
]

class YourPassword extends Component {
  state = {showPassword: false, searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onshowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {showPassword, searchInput} = this.state
    const {userList, isPassword, deleteObject} = this.props
    const SearchResults = userList.filter(eachUser =>
      eachUser.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const length1 = SearchResults.length
    return (
      <div className="password-container1">
        <div className="first-container">
          <div className="your-password">
            <h1 className="add-password">Your Passwords</h1>
            <p className="no-of-pass">{length1}</p>
          </div>
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search"
            />
            <hr />
            <input
              type="search"
              placeholder="Search"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <hr className="line" />
        <div className="show-password-container">
          <input
            id="showPassword"
            type="checkbox"
            className="show-button"
            value={showPassword}
            onChange={this.onshowPassword}
          />
          <label htmlFor="showPassword" className="show-password">
            Show Passwords
          </label>
        </div>
        {isPassword && length1 !== 0 ? (
          <ul className="list-container">
            {SearchResults.map(eachUser => (
              <UserContainer
                key={eachUser.id}
                userDetails={eachUser}
                profileColors={profileColors}
                showPassword={showPassword}
                deleteObject={deleteObject}
              />
            ))}
          </ul>
        ) : (
          <div className="noPassword-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
              alt="no passwords"
              className="no-pass-logo"
            />
            <p className="no-title">No Passwords</p>
          </div>
        )}
      </div>
    )
  }
}
export default YourPassword
