import {withRouter, Link} from 'react-router-dom'
import './index.css'

const ShowCard = props => {
  const {showDetails} = props
  const {id, name, image} = showDetails
  const showImage = image && image.original && image.medium ? image.medium : ''
  return (
    <li className="show-card">
      {showImage !== '' ? (
        <img src={showImage} alt="img" className="show-image" />
      ) : (
        <p className="no-img">No Image</p>
      )}
      <div className="show-card-content">
        <p>{name}</p>
        <Link to={`/showDetails/${id}`}>
          <button type="button" className="watch-btn">
            Watch
          </button>
        </Link>
      </div>
    </li>
  )
}

export default withRouter(ShowCard)
