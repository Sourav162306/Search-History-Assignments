import './history.css'

const HistoryEl = props => {
  const {historyDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-item">
      <div className="first-part">
        <p className="time">{timeAccessed}</p>
        <div className="logo-container">
          <img src={logoUrl} alt="domain logo" className="app-logo-img" />
          <p className="title">{title}</p>
          <a
            href={domainUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="domain-url"
          >
            {domainUrl}
          </a>
        </div>
      </div>
      <button type="button" className="second-part">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="logo-delete"
          onClick={onDelete}
        />
      </button>
    </li>
  )
}

export default HistoryEl
