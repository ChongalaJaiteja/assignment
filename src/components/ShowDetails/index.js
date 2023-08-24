import {Component} from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

import './index.css'

class ShowDetails extends Component {
  state = {
    showDetails: {},
    isLoading: true,
    isPopupVisible: false,
    isTicketBooked: false,
  }

  componentDidMount() {
    this.getShowData()
  }

  getShowData = async () => {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=all')
    const data = await response.json()
    const {match} = this.props
    const {params} = match
    const {id} = params
    const filteredData = data.find(
      eachShow => eachShow.show.id === parseInt(id),
    )
    console.log(filteredData)
    this.setState({isLoading: false, showDetails: filteredData})
  }

  handleBookButtonClick = () => {
    this.setState({isPopupVisible: true})
  }

  handlePopupClose = () => {
    this.setState({isPopupVisible: false})
  }

  bookTicket = () => {
    this.setState({isTicketBooked: true})
  }

  render() {
    const {isLoading, showDetails, isPopupVisible, isTicketBooked} = this.state

    if (isLoading) {
      return <ClipLoader color="#36d7b7" />
    }

    if (!showDetails || !showDetails.show) {
      return <div>No show details available.</div>
    }

    const {
      url,
      name,
      type,
      language,
      genres,
      status,
      runtime,
      averageRuntime,
      officialSite,
      rating,
      image,
      summary,
    } = showDetails.show
    const userDetails = JSON.parse(localStorage.getItem('userDetails'))
    return (
      <div className="show-details-bg-container">
        <div className="show-details-header">
          <img
            src={image && image.original}
            alt={name}
            className="show-details-img"
          />
          <div className="show-details-title">
            <h1>{name}</h1>
            <p>{type}</p>
          </div>
        </div>
        <div className="show-details-info">
          <div className="show-details">
            <h2>Details</h2>
            <p>Language: {language}</p>
            <p>Status: {status}</p>
            <p>Runtime: {runtime} minutes</p>
            <p>Average Runtime: {averageRuntime || 'N/A'} minutes</p>
            <p>Rating : {rating.average || 'N/A'}</p>
            <p>Genres: {genres && genres.join(', ')}</p>
            <h2>Summary</h2>
            <p dangerouslySetInnerHTML={{__html: summary}} />
            <p>
              Official Site :
              {officialSite ? (
                <a
                  href={officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {officialSite}
                </a>
              ) : (
                'N/A'
              )}
            </p>
          </div>
          <button
            type="button"
            className="book-btn"
            onClick={this.handleBookButtonClick}
          >
            Book Now
          </button>
        </div>
        {isPopupVisible && (
          <div className="popup-overlay">
            <div className="popup">
              <button
                type="button"
                className="close-popup"
                onClick={this.handlePopupClose}
              >
                X
              </button>
              {isTicketBooked ? (
                <h1>Booking completed</h1>
              ) : (
                <div className="booking-details-container">
                  <h1>show name : {name}</h1>
                  <h1>rating : {rating.average || 'N/A'}</h1>
                  <h1>runtime : {runtime || 'N/A'}</h1>
                  <h1>user name : {userDetails.name}</h1>
                  <h1>user email : {userDetails.email}</h1>
                  <button
                    type="button"
                    className="book-btn"
                    onClick={this.bookTicket}
                  >
                    Book
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default ShowDetails
