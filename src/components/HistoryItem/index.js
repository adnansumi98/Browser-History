import './index.css'

const HistoryItem = props => {
  const {HistoryList} = props

  return HistoryItem.map(eachItem => {
    const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem
    return (
      <li className="item-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt={title} />
        <p className="title">
          {title}
          <span className="Url"> {domainUrl}</span>
        </p>
      </li>
    )
  })
}

export default HistoryItem
