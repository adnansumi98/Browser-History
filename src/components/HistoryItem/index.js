import './index.css'

const HistoryItem = props => {
  const { HistoryList, onDelete } = props

  return (
    <div className="results-container">
      <ul>
        {HistoryList.map(eachItem => {
          const { id, timeAccessed, logoUrl, title, domainUrl } = eachItem
          return (
            <li key={id} className="item-container">
              <div className="time-container">
                <p className="time">{timeAccessed}</p>
              </div>
              <div className="details-container">
                <img src={logoUrl} className="logo" alt="domain logo" />
                <div className="text-container">
                  <p className="title">{title}</p>
                  <p className="Url"> {domainUrl}</p>
                </div>
                <button
                  onClick={() => onDelete(id)}
                  data-testid="delete"
                >
                  <img className="delete" alt="delete" src="https://assets.ccbp.in/frontend/react-js/delete-img.png" />
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default HistoryItem
