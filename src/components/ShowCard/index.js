import {withRouter, Link} from 'react-router-dom'
import './index.css'

const ShowCard = props => {
  const {showDetails} = props
  const {id, name, image, rating} = showDetails
  const {average} = rating
  const showImage = image && image.original && image.medium ? image.medium : ''
  return (
    <li className="show-card">
      {showImage !== '' ? (
        <img src={showImage} alt="img" className="show-image" />
      ) : (
        <p className="no-img">No Image</p>
      )}
      <div className="show-card-content">
        <p className="show-card-name">{name}</p>
        {average && <p className="rating">{average}</p>}
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
