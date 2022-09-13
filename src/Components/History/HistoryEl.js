import './HistoryEl.css'

const HistoryEl = props => {
  const {historyDetails} = props
  const {timeAccessed, logoUrl, title, domainUrl} = historyDetails
  return (
    <li className="list-item">
      <div className="first-part">
        <p className="time">{timeAccessed}</p>
        <div className="logo-container">
          <img src={logoUrl} alt={title} className="app-logo-img" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <div className="second-part">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="logo-delete"
        />
      </div>
    </li>
  )
}

export default HistoryEl
