import ClipLoader from 'react-spinners/ClipLoader'
import {Component} from 'react'
import GenreSection from '../GenreSection'
import './index.css'

class Shows extends Component {
  state = {
    searchInput: '',
    showsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getShows()
  }

  renderGenreSections = filteredShowsList => {
    const uniqueGenres = new Set()

    filteredShowsList.forEach(eachShow => {
      if (eachShow.show.genres !== undefined) {
        eachShow.show.genres.forEach(genre => {
          uniqueGenres.add(genre)
        })
      }
    })

    const genresList = Array.from(uniqueGenres)
    console.log(genresList)

    return (
      <>
        {genresList.map(eachGenre => {
          const shows = filteredShowsList.filter(eachShow =>
            eachShow.show.genres.includes(eachGenre),
          )
          return (
            <GenreSection
              key={eachGenre.toUpperCase()}
              genre={eachGenre}
              showsList={shows}
            />
          )
        })}
      </>
    )
  }

  getShows = async () => {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=all')
    const fetchedData = await response.json()
    this.setState({showsList: fetchedData, isLoading: false})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {isLoading, searchInput, showsList} = this.state
    const filteredShowsList = showsList.filter(eachShow =>
      eachShow.show.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <nav>
          <input
            type="search"
            value={searchInput}
            onChange={this.onChangeInput}
            className="user-input"
            placeholder="Search Shows"
          />
        </nav>
        <div className="shows-bg-container">
          {isLoading ? (
            <ClipLoader color="#36d7b7" />
          ) : (
            <>{this.renderGenreSections(filteredShowsList)}</>
          )}
        </div>
      </div>
    )
  }
}
export default Shows
