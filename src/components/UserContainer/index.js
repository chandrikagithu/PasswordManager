import './index.css'

const UserContainer = props => {
  const {userDetails, profileColors, showPassword, deleteObject} = props

  const {website, username, password, id} = userDetails
  const color = Math.ceil(Math.random() * 5)
  const eachColor = profileColors[color]
  const profileName = username[0]

  const onDeleteObject = () => {
    deleteObject(id)
  }

  return (
    <li className="list">
      <div className="user-container">
        <p className="profile" style={{backgroundColor: eachColor}}>
          {profileName}
        </p>
        <div className="details">
          <p className="name">{website}</p>
          <p className="name">{username}</p>
          <p className="name">
            {showPassword ? (
              `${password}`
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
                className="stars"
              />
            )}
          </p>
        </div>
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteObject}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default UserContainer
