import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import YourPassword from '../YourPassword'

import './index.css'

const initialUserDetailsList = []

class AddPassword extends Component {
  state = {
    isPassword: false,
    website: '',
    username: '',
    password: '',
    userList: initialUserDetailsList,
  }

  deleteObject = id => {
    const {userList} = this.state
    const filterUserList = userList.filter(eachList => eachList.id !== id)
    this.setState({
      userList: filterUserList,
    })
  }

  changeState = () => {
    this.setState({isPassword: true})
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  updateUserDetails = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newUser = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      userList: [...prevState.userList, newUser],
      website: '',
      username: '',
      password: '',
    }))
  }

  render() {
    const {isPassword, website, username, password, userList} = this.state
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="password-container">
          <form className="input-container" onSubmit={this.updateUserDetails}>
            <h1 className="add-password">Add New Password</h1>
            <div className="input-element">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website-logo"
              />
              <hr />
              <input
                type="text"
                className="input-style"
                placeholder="Enter Website"
                value={website}
                onChange={this.onChangeWebsite}
              />
            </div>

            <div className="input-element">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="website-logo"
              />
              <hr />
              <input
                type="text"
                className="input-style"
                placeholder="Enter Username"
                value={username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-element">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
                className="website-logo"
              />
              <hr />
              <input
                type="password"
                className="input-style"
                placeholder="Enter Password"
                value={password}
                onChange={this.onChangePassword}
              />
            </div>
            <div className="button-container">
              <button
                type="submit"
                className="button"
                onClick={this.changeState}
                data-testid="delete"
              >
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
            alt="password manager"
            className="password-manager"
          />
        </div>
        <YourPassword
          userList={userList}
          isPassword={isPassword}
          deleteObject={this.deleteObject}
        />
      </div>
    )
  }
}
export default AddPassword
