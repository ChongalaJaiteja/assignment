import './index.css'

const ShowDetails = props => {
  const {history} = props
  const {params} = history
  const {id} = params
  console.log(id)
  return <h1>fdsf</h1>
}

export default ShowDetails
