import ShowCard from '../ShowCard'
import './index.css'

const GenreSection = props => {
  const {genre, showsList} = props
  return (
    <div className="genre-section-bg-container">
      <h1 className="gener-heading">{genre}</h1>
      <ul className="genre-shows-list-container">
        {showsList.map(eachShow => (
          <ShowCard key={eachShow.show.id} showDetails={eachShow.show} />
        ))}
      </ul>
    </div>
  )
}
export default GenreSection
