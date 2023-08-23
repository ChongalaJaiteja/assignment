import './index.css'

const ShowCard = props => {
  const {showDetails} = props
  const {
    id,
    url,
    name,
    type,
    language,
    genres,
    status,
    runtime,
    averageRuntime,
    premiered,
    officialSite,
    schedule,
    rating,
    image,
    summary,
  } = showDetails
  console.log(showDetails.image.original)
  //   const {medium, original} = image
  return (
    <li className="show-card">
      {/* <img src={image} alt={name} /> */}
      <p>{name}</p>
    </li>
  )
}

export default ShowCard
