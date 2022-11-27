import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl, category} = appDetails
  return (
    <li className="app-list-item">
      <img src={imageUrl} alt={appName} className="image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
