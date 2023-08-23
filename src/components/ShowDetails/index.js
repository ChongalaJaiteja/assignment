import {Component} from 'react'
import './index.css'

class ShowDetails extends Component {
  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    return <h1>{id}</h1>
  }
}

export default ShowDetails
