import {Component} from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

import './index.css'

class ShowDetails extends Component {
  state = {
    showDetails: {},
    isLoading: true,
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

  render() {
    const {isLoading, showDetails} = this.state

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
    } = showDetails.show

    return (
      <div className="show-details-bg-container">
        <h1>{name}</h1>
      </div>
    )
  }
}

export default ShowDetails
