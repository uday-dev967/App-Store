import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const updateTab = () => {
    onChangeTab(tabId)
  }
  const activeBtn = isActive ? 'active-btn' : ''
  return (
    <li className="tab-list-item">
      <button
        className={`button ${activeBtn}`}
        type="button"
        onClick={updateTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
