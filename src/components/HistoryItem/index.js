import './index.css'

const HistoryItem = props => {
  const {HistoryDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryDetails
  const onDelete = () => {
    onDeleteHistory(id)
  }
  return (
    <li className="tab-history-container">
      <div className="tab">
        <p>{timeAccessed}</p>
        <img className="domain-logo" src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <a href={domainUrl}>{domainUrl}</a>
      </div>
      <button type="button" className="del-btn" onClick={onDelete}>
        <img
          className="del-img"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default HistoryItem
